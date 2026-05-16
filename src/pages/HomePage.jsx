import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'
import { blogPosts } from '../data/blogPosts.js'
import './HomePage.css'
import './BlogPage.css'

const TAG_CLASS = {
  'How-To Guide':    'blog-tag--how-to',
  'Quick Reference': 'blog-tag--quick-ref',
  'Conversion Fail': 'blog-tag--fail',
  'Context':         'blog-tag--context',
}

const TODAY = new Date().toISOString().slice(0, 10)

const FEATURED_POSTS = [...blogPosts]
  .filter((p) => p.date <= TODAY)
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3)

const SITE_URL = 'https://convert-fast.com'

const CATEGORIES = [
  {
    id: 'length',
    path: '/length',
    label: 'Length',
    icon: '📏',
    pairs: [
      { label: 'Meters → Feet',   path: '/length/meter-to-foot' },
      { label: 'km → Miles',      path: '/length/kilometer-to-mile' },
      { label: 'cm → Inches',     path: '/length/centimeter-to-inch' },
    ],
  },
  {
    id: 'weight',
    path: '/weight',
    label: 'Weight',
    icon: '⚖️',
    pairs: [
      { label: 'kg → lbs',       path: '/weight/kilogram-to-pound' },
      { label: 'Grams → Ounces', path: '/weight/gram-to-ounce' },
      { label: 'lbs → kg',       path: '/weight/pound-to-kilogram' },
    ],
  },
  {
    id: 'temperature',
    path: '/temperature',
    label: 'Temperature',
    icon: '🌡️',
    pairs: [
      { label: '°C → °F',         path: '/temperature/celsius-to-fahrenheit' },
      { label: '°F → °C',         path: '/temperature/fahrenheit-to-celsius' },
      { label: '°C → Kelvin',     path: '/temperature/celsius-to-kelvin' },
    ],
  },
  {
    id: 'volume',
    path: '/volume',
    label: 'Volume',
    icon: '🧪',
    pairs: [
      { label: 'Liters → Gallons', path: '/volume/liter-to-gallon' },
      { label: 'mL → Liters',      path: '/volume/milliliter-to-liter' },
      { label: 'Cups → mL',        path: '/volume/cup-to-milliliter' },
    ],
  },
  {
    id: 'area',
    path: '/area',
    label: 'Area',
    icon: '🗺️',
    pairs: [
      { label: 'm² → ft²',        path: '/area/square_meter-to-square_foot' },
      { label: 'Acres → m²',      path: '/area/acre-to-square_meter' },
      { label: 'Hectares → Acres', path: '/area/hectare-to-acre' },
    ],
  },
  {
    id: 'speed',
    path: '/speed',
    label: 'Speed',
    icon: '💨',
    pairs: [
      { label: 'km/h → mph',   path: '/speed/kilometer_per_hour-to-mile_per_hour' },
      { label: 'mph → km/h',   path: '/speed/mile_per_hour-to-kilometer_per_hour' },
      { label: 'm/s → km/h',   path: '/speed/meter_per_second-to-kilometer_per_hour' },
    ],
  },
  {
    id: 'time',
    path: '/time',
    label: 'Time',
    icon: '⏱️',
    pairs: [
      { label: 'Hours → Minutes',   path: '/time/hour-to-minute' },
      { label: 'Days → Hours',      path: '/time/day-to-hour' },
      { label: 'Minutes → Seconds', path: '/time/minute-to-second' },
    ],
  },
  {
    id: 'data-storage',
    path: '/data-storage',
    label: 'Data Storage',
    icon: '💾',
    pairs: [
      { label: 'MB → GB', path: '/data-storage/megabyte-to-gigabyte' },
      { label: 'GB → TB', path: '/data-storage/gigabyte-to-terabyte' },
      { label: 'KB → MB', path: '/data-storage/kilobyte-to-megabyte' },
    ],
  },
  {
    id: 'power',
    path: '/power',
    label: 'Power',
    icon: '⚡',
    pairs: [
      { label: 'hp → Watts',   path: '/power/horsepower-to-watt' },
      { label: 'kW → hp',      path: '/power/kilowatt-to-horsepower' },
      { label: 'Watts → kW',   path: '/power/watt-to-kilowatt' },
    ],
  },
  {
    id: 'pressure',
    path: '/pressure',
    label: 'Pressure',
    icon: '🔵',
    pairs: [
      { label: 'bar → psi',     path: '/pressure/bar-to-psi' },
      { label: 'psi → bar',     path: '/pressure/psi-to-bar' },
      { label: 'atm → bar',     path: '/pressure/atmosphere-to-bar' },
    ],
  },
  {
    id: 'energy',
    path: '/energy',
    label: 'Energy',
    icon: '⚡',
    pairs: [
      { label: 'kcal → kJ',   path: '/energy/kilocalorie-to-kilojoule' },
      { label: 'kJ → kcal',   path: '/energy/kilojoule-to-kilocalorie' },
      { label: 'kWh → kJ',    path: '/energy/kilowatt_hour-to-kilojoule' },
    ],
  },
  {
    id: 'fuel-economy',
    path: '/fuel-economy',
    label: 'Fuel Economy',
    icon: '⛽',
    pairs: [
      { label: 'L/100km → mpg', path: '/fuel-economy/liter_per_100km-to-mile_per_gallon' },
      { label: 'mpg → L/100km', path: '/fuel-economy/mile_per_gallon-to-liter_per_100km' },
      { label: 'km/L → mpg',    path: '/fuel-economy/km_per_liter-to-mile_per_gallon' },
    ],
  },
  {
    id: 'cooking',
    path: '/cooking',
    label: 'Cooking',
    icon: '🍳',
    pairs: [
      { label: 'Cup → mL',    path: '/cooking/cup-to-milliliter' },
      { label: 'tbsp → mL',   path: '/cooking/tablespoon-to-milliliter' },
      { label: 'tsp → tbsp',  path: '/cooking/teaspoon-to-tablespoon' },
    ],
  },
  {
    id: 'angle',
    path: '/angle',
    label: 'Angle',
    icon: '📐',
    pairs: [
      { label: 'Degrees → Radians', path: '/angle/degree-to-radian' },
      { label: 'Radians → Degrees', path: '/angle/radian-to-degree' },
      { label: 'Degrees → Gradians', path: '/angle/degree-to-gradian' },
    ],
  },
  {
    id: 'frequency',
    path: '/frequency',
    label: 'Frequency',
    icon: '📡',
    pairs: [
      { label: 'Hz → kHz',   path: '/frequency/hertz-to-kilohertz' },
      { label: 'MHz → GHz',  path: '/frequency/megahertz-to-gigahertz' },
      { label: 'RPM → Hz',   path: '/frequency/rpm-to-hertz' },
    ],
  },
  {
    id: 'currency',
    path: '/currency',
    label: 'Currency',
    icon: '💱',
    pairs: [
      { label: 'USD → EUR', path: '/currency' },
      { label: 'EUR → GBP', path: '/currency' },
      { label: 'USD → HUF', path: '/currency' },
    ],
  },
  {
    id: 'shoe-size',
    path: '/shoe-size',
    label: 'Shoe Size',
    icon: '👟',
    pairs: [
      { label: 'EU → US Men\'s',   path: '/shoe-size/eu-to-us_men' },
      { label: 'EU → US Women\'s', path: '/shoe-size/eu-to-us_women' },
      { label: 'EU → UK',          path: '/shoe-size/eu-to-uk' },
    ],
  },
  {
    id: 'torque',
    path: '/torque',
    label: 'Torque',
    icon: '🔩',
    pairs: [
      { label: 'Nm → ft·lb',   path: '/torque/newton_meter-to-foot_pound' },
      { label: 'ft·lb → Nm',   path: '/torque/foot_pound-to-newton_meter' },
      { label: 'Nm → in·lb',   path: '/torque/newton_meter-to-inch_pound' },
    ],
  },
  {
    id: 'roman-numerals',
    path: '/roman-numerals',
    label: 'Roman Numerals',
    icon: 'Ⅻ',
    pairs: [
      { label: '2026 → MMXXVI',    path: '/roman-numerals' },
      { label: '1999 → MCMXCIX',   path: '/roman-numerals' },
      { label: 'XLII → 42',        path: '/roman-numerals' },
    ],
  },
  {
    id: 'number-base',
    path: '/number-base',
    label: 'Number Base',
    icon: '01',
    pairs: [
      { label: 'Decimal → Binary', path: '/number-base' },
      { label: 'Decimal → Hex',    path: '/number-base' },
      { label: 'Binary → Octal',   path: '/number-base' },
    ],
  },
]


function HomePage() {
  return (
    <main className="home">
      <SEOMeta
        title="Unit Converter | Convert Fast"
        description="Free online unit converter. Instantly convert length, weight, temperature, volume, area, speed, time, and data storage — no sign-up required."
        canonical={`${SITE_URL}/`}
      />
      <h1>Unit Converter</h1>
      <p className="home__subtitle">Choose a category to start converting.</p>

      <section className="home__intro">
        <p>
          Convert Fast is a free online unit converter that handles all the measurements you need — length, weight, temperature, volume, area, speed, time, and data storage. No sign-up required, just instant, accurate results.
        </p>
        <p>
          Whether you need to convert kilometers to miles for a road trip, kilograms to pounds for a recipe, Celsius to Fahrenheit for the weather, or gigabytes to terabytes for storage planning — every conversion is a single click away. Each converter works in both directions, so you can type in either field and get the result instantly.
        </p>
        <p>
          All conversions use precise, internationally recognized conversion factors. Our reference tables show the most common values at a glance, and every pair page includes a detailed explanation of the units and the conversion formula.
        </p>
      </section>

      <section className="home__blog-strip">
        <div className="home__blog-strip-header">
          <h2 className="home__blog-strip-title">From the Blog</h2>
          <Link to="/blog" className="home__blog-strip-all">All posts →</Link>
        </div>
        <div className="home__blog-strip-grid">
          {FEATURED_POSTS.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="home__blog-card">
              <span className={`blog-tag ${TAG_CLASS[post.tag] ?? ''}`}>{post.tag}</span>
              <p className="home__blog-card-title">{post.title}</p>
              <p className="home__blog-card-desc">{post.description}</p>
              <span className="home__blog-card-read">Read →</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="home__grid">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="home__card">
            <Link to={cat.path} className="home__card-header">
              <span className="home__card-icon" aria-hidden="true">{cat.icon}</span>
              <span className="home__card-label">{cat.label}</span>
            </Link>
            <ul className="home__quick-links">
              {cat.pairs.map((pair) => (
                <li key={pair.label}>
                  <Link to={pair.path} className="home__quick-link">
                    {pair.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}

export default HomePage
