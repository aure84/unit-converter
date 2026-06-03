#!/usr/bin/env node
/**
 * prerender.mjs — build-time static HTML snapshots for SEO.
 *
 * Problem this solves: the app is a client-side rendered React SPA. The raw HTML
 * served for every URL is an empty <div id="root"></div> with one static <title>.
 * Crawlers that don't run (or defer) JS see ~1000 identical empty pages, which reads
 * as duplicate/thin content and buries the whole domain.
 *
 * This script serves the freshly built dist/ with `vite preview` (SPA fallback +
 * correct MIME types), drives a headless browser to each sitemap URL, waits for the
 * route to render its <h1> and canonical link, then writes the fully-rendered HTML
 * back to dist/<route>/index.html. Cloudflare Pages serves those files directly, so
 * crawlers get real per-page content in the first response.
 *
 * Run after `vite build`:  node scripts/prerender.mjs
 */

import { preview } from 'vite'
import { chromium } from '@playwright/test'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST = join(ROOT, 'dist')
const PORT = 4317
const ORIGIN = `http://localhost:${PORT}`
const CONCURRENCY = 6
const SITE = 'https://convert-fast.com'

// Real routes that aren't in the sitemap (legal / info pages). Prerender them too
// so they ship real content instead of an empty CSR shell.
const STATIC_EXTRA = ['/about', '/contact', '/privacy', '/terms', '/cookies']

// --- Collect routes from the built sitemap ---------------------------------
function readRoutes() {
  const xml = readFileSync(join(DIST, 'sitemap.xml'), 'utf8')
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const paths = locs.map((u) => u.replace(SITE, '').replace(/\/$/, '') || '/')
  return [...new Set([...paths, ...STATIC_EXTRA])]
}

// --- Map a route to its output file ----------------------------------------
function outFile(route) {
  if (route === '/') return join(DIST, 'index.html')
  return join(DIST, route.replace(/^\//, ''), 'index.html')
}

// --- Render one route -------------------------------------------------------
// Returns the rendered HTML. The caller writes files only AFTER the whole crawl
// finishes — writing into dist/ mid-crawl would let the preview server's SPA
// fallback serve an already-prerendered page (e.g. the homepage) as the shell
// for later routes, duplicating their head tags.
async function renderRoute(context, route) {
  const page = await context.newPage()
  try {
    await page.goto(ORIGIN + route, { waitUntil: 'networkidle', timeout: 30000 })
    // Wait for the SPA to paint real content for this route.
    await page.waitForSelector('#root h1', { timeout: 20000 })
    await page.waitForFunction(
      () => !!document.querySelector('link[rel="canonical"]'),
      { timeout: 20000 },
    )
    // Let react-helmet-async flush remaining head tags (meta, JSON-LD).
    await page.waitForTimeout(150)

    // Drop the stale static <title> that index.html ships with — react-helmet-async
    // adds its own and leaves the original in place. Keep the one that matches the
    // effective document.title.
    await page.evaluate(() => {
      const wanted = document.title
      const titles = [...document.querySelectorAll('head title')]
      let kept = false
      for (const t of titles) {
        if (!kept && t.textContent === wanted) { kept = true; continue }
        t.remove()
      }
    })

    const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML))
    return { route, ok: true, html }
  } catch (err) {
    return { route, ok: false, error: err.message }
  } finally {
    await page.close()
  }
}

// --- Simple concurrency pool ------------------------------------------------
async function runPool(items, worker, size) {
  const results = []
  let i = 0
  const runners = Array.from({ length: size }, async () => {
    while (i < items.length) {
      const idx = i++
      results[idx] = await worker(items[idx], idx)
    }
  })
  await Promise.all(runners)
  return results
}

async function main() {
  const routes = readRoutes()
  console.log(`Prerendering ${routes.length} routes (concurrency ${CONCURRENCY})…`)

  const server = await preview({ preview: { port: PORT, strictPort: true } })
  const browser = await chromium.launch()
  const context = await browser.newContext()

  let done = 0
  const failures = []
  const results = await runPool(
    routes,
    async (route) => {
      const r = await renderRoute(context, route)
      done++
      if (!r.ok) failures.push(r)
      if (done % 50 === 0 || done === routes.length) {
        console.log(`  ${done}/${routes.length} (${failures.length} failed)`)
      }
      return r
    },
    CONCURRENCY,
  )

  await context.close()
  await browser.close()
  await server.httpServer.close()

  // Write files only now — see renderRoute note on why not mid-crawl.
  for (const r of results) {
    if (!r.ok) continue
    const file = outFile(r.route)
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, r.html, 'utf8')
  }

  const ok = results.filter((r) => r.ok).length
  console.log(`\nDone: ${ok}/${routes.length} prerendered.`)

  // Self-check: every page must ship exactly one <title> and one canonical.
  // Duplicates here mean stale head tags leaked in and would wreck indexing.
  const dupes = []
  for (const r of results) {
    if (!r.ok) continue
    const titleCount = (r.html.match(/<title[\s>]/g) || []).length
    const canonCount = (r.html.match(/rel="canonical"/g) || []).length
    if (titleCount !== 1 || canonCount !== 1) {
      dupes.push(`${r.route} (title=${titleCount} canonical=${canonCount})`)
    }
  }
  if (dupes.length) {
    console.error(`\n✗ ${dupes.length} pages have duplicate <title>/canonical tags:`)
    for (const d of dupes.slice(0, 30)) console.error(`  ${d}`)
    process.exitCode = 1
  } else {
    console.log('Self-check passed: 1 title + 1 canonical on every page.')
  }

  if (failures.length) {
    console.log(`\n${failures.length} render failures:`)
    for (const f of failures.slice(0, 30)) console.log(`  ✗ ${f.route} — ${f.error}`)
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
