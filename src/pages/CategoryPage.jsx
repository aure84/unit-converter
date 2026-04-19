import { useLocation } from 'react-router'
import Converter from '../components/Converter.jsx'
import CategoryContent from '../components/CategoryContent.jsx'
import SEOMeta from '../components/SEOMeta.jsx'
import { units } from '../data/units.js'
import { categoryContent } from '../data/content.js'

const SITE_URL = 'https://convert-fast.com'

/**
 * Maps URL path segments to units registry keys.
 * Handles the data-storage → data_storage case and keeps all others identical.
 */
const PATH_TO_REGISTRY = {
  length:          'length',
  weight:          'weight',
  temperature:     'temperature',
  volume:          'volume',
  area:            'area',
  speed:           'speed',
  time:            'time',
  'data-storage':  'data_storage',
  pressure:        'pressure',
  energy:          'energy',
  power:           'power',
  'fuel-economy':  'fuel_economy',
  cooking:         'cooking',
  angle:           'angle',
  frequency:       'frequency',
  'shoe-size':     'shoe_size',
  torque:          'torque',
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
  pressure:     { from: 'bar',               to: 'psi' },
  power:        { from: 'horsepower',        to: 'watt' },
  energy:       { from: 'kilocalorie',        to: 'kilojoule' },
  fuel_economy: { from: 'liter_per_100km',   to: 'mile_per_gallon' },
  cooking:      { from: 'cup',               to: 'milliliter' },
  angle:        { from: 'degree',            to: 'radian' },
  frequency:    { from: 'hertz',             to: 'kilohertz' },
  shoe_size:    { from: 'eu',               to: 'us_men' },
  torque:       { from: 'newton_meter',     to: 'foot_pound' },
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
  const h1 = categoryContent[category]?.h1 ?? heading

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: heading,
    url: canonical,
    description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  const catFaq = categoryContent[category]?.faq ?? []
  const faqJsonLd = catFaq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: catFaq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  return (
    <main>
      <SEOMeta
        title={pageTitle}
        description={description}
        canonical={canonical}
        jsonLd={faqJsonLd ? [jsonLd, faqJsonLd] : jsonLd}
      />
      <h1>{h1}</h1>
      <Converter
        key={category}
        category={category}
        defaultFrom={defaults.from}
        defaultTo={defaults.to}
        initialValue={initialValue}
      />
      <CategoryContent category={category} />
    </main>
  )
}

export default CategoryPage
