import { useLocation } from 'react-router'
import Converter from '../components/Converter.jsx'
import SEOMeta from '../components/SEOMeta.jsx'
import { units } from '../data/units.js'

const SITE_URL = 'https://convert-fast.com'

/**
 * Maps URL path segments to units registry keys.
 * Handles the data-storage → data_storage case and keeps all others identical.
 */
const PATH_TO_REGISTRY = {
  length:         'length',
  weight:         'weight',
  temperature:    'temperature',
  volume:         'volume',
  area:           'area',
  speed:          'speed',
  time:           'time',
  'data-storage': 'data_storage',
}

/**
 * Sensible default unit pairs per category.
 * Falls back to the first two units in the registry if a category isn't listed.
 */
const CATEGORY_DEFAULTS = {
  length:       { from: 'meter',              to: 'foot' },
  weight:       { from: 'kilogram',           to: 'pound' },
  temperature:  { from: 'celsius',            to: 'fahrenheit' },
  volume:       { from: 'liter',              to: 'gallon' },
  area:         { from: 'square_meter',       to: 'square_foot' },
  speed:        { from: 'kilometer_per_hour', to: 'mile_per_hour' },
  time:         { from: 'second',             to: 'minute' },
  data_storage: { from: 'megabyte',           to: 'gigabyte' },
}

/**
 * Pretty-print a registry key as a title (e.g. "data_storage" → "Data Storage").
 */
function toTitle(key) {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function CategoryPage() {
  const { pathname, search } = useLocation()
  const initialValue = new URLSearchParams(search).get('value') ?? undefined

  // First segment after the leading slash, e.g. "/data-storage" → "data-storage"
  const segment = pathname.split('/')[1] ?? ''
  const category = PATH_TO_REGISTRY[segment] ?? segment
  const defaults = CATEGORY_DEFAULTS[category] ?? {}
  const categoryTitle = toTitle(category)
  const heading = `${categoryTitle} Converter`

  // Build a short list of unit names for the description
  const unitNames = units[category]?.units.map((u) => u.label) ?? []
  const unitPreview = unitNames.slice(0, 3).join(', ')

  const pageTitle = `${categoryTitle} Converter | Convert Fast`
  const description = `Free online ${categoryTitle.toLowerCase()} converter. Convert between ${unitPreview}, and more.`
  const canonical = `${SITE_URL}/${segment}`

  return (
    <main>
      <SEOMeta
        title={pageTitle}
        description={description}
        canonical={canonical}
      />
      <h1>{heading}</h1>
      <Converter
        category={category}
        defaultFrom={defaults.from}
        defaultTo={defaults.to}
        initialValue={initialValue}
      />
    </main>
  )
}

export default CategoryPage
