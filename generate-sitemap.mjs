/**
 * Sitemap generator — run with: node generate-sitemap.mjs
 * Outputs to public/sitemap.xml
 */

import fs from 'fs';

const BASE = 'https://convert-fast.com';
const TODAY = new Date().toISOString().slice(0, 10);

function url(loc, priority, changefreq) {
  const cf = changefreq ? `\n    <changefreq>${changefreq}</changefreq>` : '';
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${TODAY}</lastmod>${cf}\n    <priority>${priority}</priority>\n  </url>`;
}

function pairs(category, ids) {
  const lines = [];
  for (const from of ids) {
    for (const to of ids) {
      if (from !== to) {
        lines.push(`  <url><loc>${BASE}/${category}/${from}-to-${to}</loc><lastmod>${TODAY}</lastmod><priority>0.6</priority></url>`);
      }
    }
  }
  return lines.join('\n');
}

const sections = [];

// ── Static & blog ────────────────────────────────────────────────────────────
sections.push([
  url(`${BASE}/`,            '1.0'),
  url(`${BASE}/blog`,        '0.8', 'weekly'),
  url(`${BASE}/blog/kilometers-to-miles`,   '0.7', 'monthly'),
  url(`${BASE}/blog/kg-to-lbs`,             '0.7', 'monthly'),
  url(`${BASE}/blog/celsius-to-fahrenheit`, '0.7', 'monthly'),
  url(`${BASE}/blog/data-storage-units`,    '0.7', 'monthly'),
  url(`${BASE}/blog/speed-units`,           '0.7', 'monthly'),
  url(`${BASE}/blog/gallons-to-liters`,     '0.7', 'monthly'),
  url(`${BASE}/blog/meters-to-feet`,        '0.7', 'monthly'),
  url(`${BASE}/blog/psi-to-bar`,            '0.7', 'monthly'),
  url(`${BASE}/blog/cups-to-ml`,            '0.7', 'monthly'),
  url(`${BASE}/blog/mpg-to-l100km`,         '0.7', 'monthly'),
  url(`${BASE}/blog/horsepower-to-kw`,      '0.7', 'monthly'),
  url(`${BASE}/blog/degrees-to-radians`,    '0.7', 'monthly'),
].join('\n'));

// ── Length ───────────────────────────────────────────────────────────────────
// Selective pairs (high-value only — same as original sitemap)
const lengthUnits = ['meter','kilometer','centimeter','mile','yard','foot','inch'];
sections.push([
  `  <!-- Length -->`,
  url(`${BASE}/length`, '0.8'),
  pairs('length', lengthUnits),
].join('\n'));

// ── Weight ───────────────────────────────────────────────────────────────────
const weightUnits = ['kilogram','gram','pound','ounce','ton'];
sections.push([
  `  <!-- Weight -->`,
  url(`${BASE}/weight`, '0.8'),
  pairs('weight', weightUnits),
].join('\n'));

// ── Temperature ──────────────────────────────────────────────────────────────
sections.push([
  `  <!-- Temperature -->`,
  url(`${BASE}/temperature`, '0.8'),
  pairs('temperature', ['celsius','fahrenheit','kelvin']),
].join('\n'));

// ── Volume ───────────────────────────────────────────────────────────────────
const volumeUnits = ['liter','milliliter','gallon','cup','fluid_ounce'];
sections.push([
  `  <!-- Volume -->`,
  url(`${BASE}/volume`, '0.8'),
  pairs('volume', volumeUnits),
].join('\n'));

// ── Area ─────────────────────────────────────────────────────────────────────
const areaUnits = ['square_meter','square_foot','square_kilometer','square_mile','acre','hectare'];
sections.push([
  `  <!-- Area -->`,
  url(`${BASE}/area`, '0.8'),
  pairs('area', areaUnits),
].join('\n'));

// ── Speed ────────────────────────────────────────────────────────────────────
sections.push([
  `  <!-- Speed -->`,
  url(`${BASE}/speed`, '0.8'),
  pairs('speed', ['meter_per_second','kilometer_per_hour','mile_per_hour','knot']),
].join('\n'));

// ── Time ─────────────────────────────────────────────────────────────────────
sections.push([
  `  <!-- Time -->`,
  url(`${BASE}/time`, '0.8'),
  pairs('time', ['second','minute','hour','day','week','month','year']),
].join('\n'));

// ── Data Storage ─────────────────────────────────────────────────────────────
const dataUnits = ['byte','kilobyte','megabyte','gigabyte','terabyte'];
sections.push([
  `  <!-- Data Storage -->`,
  url(`${BASE}/data-storage`, '0.8'),
  pairs('data-storage', dataUnits),
].join('\n'));

// ── Pressure ─────────────────────────────────────────────────────────────────
const pressureUnits = ['pascal','kilopascal','megapascal','bar','psi','atmosphere','torr'];
sections.push([
  `  <!-- Pressure -->`,
  url(`${BASE}/pressure`, '0.8'),
  pairs('pressure', pressureUnits),
].join('\n'));

// ── Energy ───────────────────────────────────────────────────────────────────
const energyUnits = ['joule','kilojoule','calorie','kilocalorie','watt_hour','kilowatt_hour','btu'];
sections.push([
  `  <!-- Energy -->`,
  url(`${BASE}/energy`, '0.8'),
  pairs('energy', energyUnits),
].join('\n'));

// ── Fuel Economy ─────────────────────────────────────────────────────────────
const fuelUnits = ['km_per_liter','mile_per_gallon','mile_per_gallon_uk','liter_per_100km'];
sections.push([
  `  <!-- Fuel Economy -->`,
  url(`${BASE}/fuel-economy`, '0.8'),
  pairs('fuel-economy', fuelUnits),
].join('\n'));

// ── Cooking ──────────────────────────────────────────────────────────────────
const cookingUnits = ['milliliter','liter','teaspoon','tablespoon','fluid_ounce','cup','pint','quart','gallon','gram_water'];
sections.push([
  `  <!-- Cooking -->`,
  url(`${BASE}/cooking`, '0.8'),
  // Ingredient pages
  `  <url><loc>${BASE}/cooking/flour-grams-to-cups</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>`,
  `  <url><loc>${BASE}/cooking/sugar-grams-to-cups</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>`,
  `  <url><loc>${BASE}/cooking/butter-grams-to-cups</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>`,
  `  <url><loc>${BASE}/cooking/brown-sugar-grams-to-cups</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>`,
  `  <url><loc>${BASE}/cooking/almond-flour-grams-to-cups</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>`,
  `  <url><loc>${BASE}/cooking/cocoa-powder-grams-to-cups</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>`,
  `  <url><loc>${BASE}/cooking/powdered-sugar-grams-to-cups</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>`,
  `  <url><loc>${BASE}/cooking/honey-grams-to-cups</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>`,
  // Pairs
  pairs('cooking', cookingUnits),
].join('\n'));

// ── Power ────────────────────────────────────────────────────────────────────
const powerUnits = ['watt','kilowatt','megawatt','horsepower','horsepower_metric','btu_per_hour'];
sections.push([
  `  <!-- Power -->`,
  url(`${BASE}/power`, '0.8'),
  pairs('power', powerUnits),
].join('\n'));

// ── Angle ─────────────────────────────────────────────────────────────────────
const angleUnits = ['degree','radian','gradian','arcminute','arcsecond','turn'];
sections.push([
  `  <!-- Angle -->`,
  url(`${BASE}/angle`, '0.8'),
  pairs('angle', angleUnits),
].join('\n'));

// ── Frequency ────────────────────────────────────────────────────────────────
const frequencyUnits = ['hertz','kilohertz','megahertz','gigahertz','terahertz','rpm'];
sections.push([
  `  <!-- Frequency -->`,
  url(`${BASE}/frequency`, '0.8'),
  pairs('frequency', frequencyUnits),
].join('\n'));

// ── Shoe Size ─────────────────────────────────────────────────────────────────
const shoeSizeUnits = ['eu','us_men','us_women','uk','foot_cm'];
sections.push([
  `  <!-- Shoe Size -->`,
  url(`${BASE}/shoe-size`, '0.8'),
  pairs('shoe-size', shoeSizeUnits),
].join('\n'));

// ── Torque ───────────────────────────────────────────────────────────────────
const torqueUnits = ['newton_meter','foot_pound','inch_pound','kilogram_force_meter','kilogram_force_centimeter','newton_centimeter'];
sections.push([
  `  <!-- Torque -->`,
  url(`${BASE}/torque`, '0.8'),
  pairs('torque', torqueUnits),
].join('\n'));

// ── Currency ─────────────────────────────────────────────────────────────────
sections.push([
  `  <!-- Currency -->`,
  `  <url><loc>${BASE}/currency</loc><lastmod>${TODAY}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>`,
].join('\n'));

// ── Assemble ─────────────────────────────────────────────────────────────────
const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  sections.join('\n\n'),
  `</urlset>`,
].join('\n');

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');

// Count URLs
const count = (xml.match(/<url>/g) || []).length;
console.log(`✓ sitemap.xml generated — ${count} URLs`);
