import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'
import './HomePage.css'

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

      <div className="home__grid">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="home__card">
            <Link to={cat.path} className="home__card-header">
              <span className="home__card-icon" aria-hidden="true">{cat.icon}</span>
              <span className="home__card-label">{cat.label}</span>
            </Link>
            <ul className="home__quick-links">
              {cat.pairs.map((pair) => (
                <li key={pair.path}>
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
