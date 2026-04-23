/**
 * generate-sitemap.mjs
 *
 * Reads the units registry and writes public/sitemap.xml containing:
 *   - Homepage (priority 1.0)
 *   - All 8 category pages (priority 0.8)
 *   - Every from→to pair within each category, excluding same-unit pairs (priority 0.6)
 *
 * Run with: node scripts/generate-sitemap.mjs
 */

import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const { blogPosts } = await import(resolve(__dirname, '../src/data/blogPosts.js'))

const units = {
  length: ['meter', 'kilometer', 'centimeter', 'mile', 'yard', 'foot', 'inch'],
  weight: ['kilogram', 'gram', 'pound', 'ounce', 'ton', 'stone'],
  temperature: ['celsius', 'fahrenheit', 'kelvin'],
  volume: ['liter', 'milliliter', 'gallon', 'cup', 'fluid_ounce'],
  area: ['square_meter', 'square_kilometer', 'square_mile', 'acre', 'hectare'],
  speed: ['meter_per_second', 'kilometer_per_hour', 'mile_per_hour', 'knot'],
  time: ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'],
  data_storage: ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte'],
  pressure: ['pascal', 'bar', 'psi', 'atmosphere', 'torr'],
  energy: ['joule', 'kilojoule', 'calorie', 'kilocalorie', 'watt_hour', 'kilowatt_hour', 'btu'],
  fuel_economy: ['mpg', 'l_per_100km', 'km_per_liter'],
  power: ['watt', 'kilowatt', 'megawatt', 'horsepower', 'ps', 'btu_per_hour'],
  torque: ['newton_meter', 'foot_pound', 'inch_pound', 'kgf_meter', 'kgf_cm', 'newton_cm'],
}

/** Convert a registry key to its URL segment (data_storage → data-storage). */
function toUrlSegment(key) {
  return key.replace(/_/g, '-')
}

/** Convert a unit id to a URL-safe slug segment (underscores → hyphens). */
function toSlug(id) {
  return id.replace(/_/g, '-')
}

const SITE_URL = 'https://convert-fast.com'
const LASTMOD = new Date().toISOString().slice(0, 10)

const urls = []

// Homepage
urls.push({ loc: `${SITE_URL}/`, priority: '1.0' })

// Category pages + pair pages
for (const [category, unitIds] of Object.entries(units)) {
  const segment = toUrlSegment(category)

  // Category page
  urls.push({ loc: `${SITE_URL}/${segment}`, priority: '0.8' })

  // All ordered pairs (from ≠ to)
  for (const from of unitIds) {
    for (const to of unitIds) {
      if (from === to) continue
      const pair = `${toSlug(from)}-to-${toSlug(to)}`
      urls.push({ loc: `${SITE_URL}/${segment}/${pair}`, priority: '0.6' })
    }
  }
}

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
