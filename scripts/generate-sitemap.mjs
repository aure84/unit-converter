/**
 * generate-sitemap.mjs
 *
 * Imports units from src/data/units.js and blog posts from src/data/blogPosts.js,
 * then writes public/sitemap.xml.
 *
 * Run with: node scripts/generate-sitemap.mjs
 */

import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const { units } = await import(resolve(__dirname, '../src/data/units.js'))
const { blogPosts } = await import(resolve(__dirname, '../src/data/blogPosts.js'))

// Ingredient pages in the cooking category (special routes, not unit pairs)
const COOKING_INGREDIENT_SLUGS = [
  'flour-grams-to-cups',
  'sugar-grams-to-cups',
  'butter-grams-to-cups',
  'brown-sugar-grams-to-cups',
  'almond-flour-grams-to-cups',
  'cocoa-powder-grams-to-cups',
  'powdered-sugar-grams-to-cups',
  'honey-grams-to-cups',
]

/** Convert a registry key to its URL segment (shoe_size → shoe-size). */
function toUrlSegment(key) {
  return key.replace(/_/g, '-')
}

const SITE_URL = 'https://convert-fast.com'
const LASTMOD = new Date().toISOString().slice(0, 10)

const urls = []

// Homepage
urls.push({ loc: `${SITE_URL}/`, priority: '1.0' })

// Category pages + pair pages (all categories from units.js)
for (const [category, data] of Object.entries(units)) {
  const segment = toUrlSegment(category)
  const unitIds = data.units.map((u) => u.id)

  urls.push({ loc: `${SITE_URL}/${segment}`, priority: '0.8' })

  // Ingredient pages for cooking (before unit pairs)
  if (category === 'cooking') {
    for (const slug of COOKING_INGREDIENT_SLUGS) {
      urls.push({ loc: `${SITE_URL}/cooking/${slug}`, priority: '0.7' })
    }
  }

  // All ordered pairs (from ≠ to)
  for (const from of unitIds) {
    for (const to of unitIds) {
      if (from === to) continue
      urls.push({ loc: `${SITE_URL}/${segment}/${from}-to-${to}`, priority: '0.6' })
    }
  }
}

// Currency page (standalone, not in units registry)
urls.push({ loc: `${SITE_URL}/currency`, priority: '0.8' })

// Blog index + individual posts
urls.push({ loc: `${SITE_URL}/blog`, priority: '0.8' })
for (const post of blogPosts) {
  urls.push({ loc: `${SITE_URL}/blog/${post.slug}`, priority: '0.7' })
}

// Build XML
const urlEntries = urls
  .map(
    ({ loc, priority }) =>
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

const outPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml, 'utf8')

console.log(`sitemap.xml written — ${urls.length} URLs`)
