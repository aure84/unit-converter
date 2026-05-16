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
  url(`${BASE}/blog/mars-climate-orbiter`,   '0.7', 'monthly'),
  url(`${BASE}/blog/gimli-glider`,           '0.7', 'monthly'),
  url(`${BASE}/blog/columbus-unit-error`,    '0.7', 'monthly'),
  url(`${BASE}/blog/nm-to-ft-lb`,           '0.7', 'monthly'),
  url(`${BASE}/blog/shoe-size-guide`,        '0.7', 'monthly'),
  url(`${BASE}/blog/cooking-measurements`,   '0.7', 'monthly'),
  url(`${BASE}/blog/inches-to-cm`,           '0.7', 'monthly'),
  url(`${BASE}/blog/oz-to-grams`,            '0.7', 'monthly'),
  url(`${BASE}/blog/feet-to-inches`,         '0.7', 'monthly'),
  url(`${BASE}/blog/liters-to-ml`,           '0.7', 'monthly'),
  url(`${BASE}/blog/acres-to-sq-meters`,     '0.7', 'monthly'),
  url(`${BASE}/blog/hours-to-minutes`,       '0.7', 'monthly'),
  url(`${BASE}/blog/joules-to-calories`,     '0.7', 'monthly'),
  url(`${BASE}/blog/vasa-warship`,           '0.7', 'monthly'),
  url(`${BASE}/blog/hard-drive-space`,       '0.7', 'monthly'),
  url(`${BASE}/blog/stone-to-kg`,            '0.7', 'monthly'),
  url(`${BASE}/blog/metric-to-imperial`,     '0.7', 'monthly'),
  url(`${BASE}/blog/bar-to-psi-conversion-chart`,          '0.7', 'monthly'),
  url(`${BASE}/blog/celsius-to-fahrenheit-quick-reference`,'0.7', 'monthly'),
  url(`${BASE}/blog/columbus-miscalculation`,               '0.7', 'monthly'),
  url(`${BASE}/blog/gimli-glider-boeing-767`,               '0.7', 'monthly'),
  url(`${BASE}/blog/hectare-to-square-km`,                  '0.7', 'monthly'),
  url(`${BASE}/blog/horsepower-vs-kw-vs-ps`,                '0.7', 'monthly'),
  url(`${BASE}/blog/hospital-medication-dose-error`,         '0.7', 'monthly'),
  url(`${BASE}/blog/how-big-is-1-hectare`,                  '0.7', 'monthly'),
  url(`${BASE}/blog/how-many-steps-is-1-km`,                '0.7', 'monthly'),
  url(`${BASE}/blog/how-to-read-tire-pressure-bar-psi-kpa`, '0.7', 'monthly'),
  url(`${BASE}/blog/inches-to-cm-chart-clothes-height-screens`, '0.7', 'monthly'),
  url(`${BASE}/blog/joules-to-calories-food-energy`,         '0.7', 'monthly'),
  url(`${BASE}/blog/kitchen-measurement-conversions`,         '0.7', 'monthly'),
  url(`${BASE}/blog/liters-to-gallons-us-vs-uk`,             '0.7', 'monthly'),
  url(`${BASE}/blog/mars-climate-orbiter-crash`,             '0.7', 'monthly'),
  url(`${BASE}/blog/metric-vs-imperial-cheat-sheet`,         '0.7', 'monthly'),
  url(`${BASE}/blog/mpg-to-l100km-eu-vs-us-fuel-economy`,    '0.7', 'monthly'),
  url(`${BASE}/blog/pounds-to-kilograms-complete-guide`,      '0.7', 'monthly'),
  url(`${BASE}/blog/us-metric-history`,                       '0.7', 'monthly'),
  url(`${BASE}/blog/vasa-warship-disaster`,                   '0.7', 'monthly'),
  url(`${BASE}/blog/watts-to-kilowatts`,                     '0.7', 'monthly'),
  url(`${BASE}/blog/what-is-2-5-bar-in-psi-tire-pressure`,   '0.7', 'monthly'),
  url(`${BASE}/blog/what-is-a-kilowatt-hour`,                '0.7', 'monthly'),
].join('\n'));

// ── Length ───────────────────────────────────────────────────────────────────
// Selective pairs (high-value only — same as original sitemap)
const lengthUnits = ['meter','kilometer','centimeter','millimeter','mile','nautical_mile','yard','foot','inch'];
sections.push([
  `  <!-- Length -->`,
  url(`${BASE}/length`, '0.8'),
  pairs('length', lengthUnits),
].join('\n'));

// ── Weight ───────────────────────────────────────────────────────────────────
const weightUnits = ['kilogram','gram','milligram','pound','ounce','stone','ton'];
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
const volumeUnits = ['liter','milliliter','gallon','quart','pint','cup','fluid_ounce','tablespoon','teaspoon'];
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
const dataUnits = ['bit','byte','kilobyte','megabyte','gigabyte','terabyte','petabyte'];
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
const powerUnits = ['watt','kilowatt','megawatt','horsepower','ps','btu_per_hour'];
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

// ── Roman Numerals ───────────────────────────────────────────────────────────
sections.push([
  `  <!-- Roman Numerals -->`,
  url(`${BASE}/roman-numerals`, '0.8'),
].join('\n'));

// ── Number Base ──────────────────────────────────────────────────────────────
sections.push([
  `  <!-- Number Base -->`,
  url(`${BASE}/number-base`, '0.8'),
].join('\n'));

// ── Value-specific pages ─────────────────────────────────────────────────────

function range(start, end, step = 1) {
  const out = []
  for (let v = start; v <= end; v += step) out.push(v)
  return out
}

const VALUE_PAGES = [
  {
    category: 'weight',
    from: 'pound', to: 'kilogram',
    values: [
      ...range(50, 500, 50),
      ...range(550, 2000, 50),
      2500, 3000, 3300, 3500, 4000, 4500, 4900, 5000,
    ],
  },
  {
    category: 'weight',
    from: 'kilogram', to: 'pound',
    values: [50, 60, 70, 75, 80, 85, 90, 95, 100, 110, 120, 130, 140, 150, 200],
  },
  {
    category: 'length',
    from: 'kilometer', to: 'mile',
    values: [...range(1, 50), 60, 70, 80, 90, 100],
  },
  {
    category: 'length',
    from: 'inch', to: 'centimeter',
    values: [...range(1, 72)],
  },
  {
    category: 'length',
    from: 'centimeter', to: 'inch',
    values: [...range(5, 200, 5)],
  },
  {
    category: 'temperature',
    from: 'fahrenheit', to: 'celsius',
    values: [-40, -20, -10, 0, 10, 20, 30, 32, 40, 50, 60, 70, 72, 75, 80, 85, 90, 95, 98, 98.6, 100, 105, 110, 120, 130, 140, 150, 200, 212, 250, 300, 350, 400, 450],
  },
  {
    category: 'temperature',
    from: 'celsius', to: 'fahrenheit',
    values: [-40, -20, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 37, 40, 50, 60, 70, 80, 90, 100],
  },
]

const valueSection = []
for (const { category, from, to, values } of VALUE_PAGES) {
  for (const v of values) {
    valueSection.push(
      `  <url><loc>${BASE}/${category}/${v}-${from}-to-${to}</loc><lastmod>${TODAY}</lastmod><priority>0.6</priority></url>`
    )
  }
}
sections.push(`  <!-- Value-specific pages -->\n` + valueSection.join('\n'))

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
