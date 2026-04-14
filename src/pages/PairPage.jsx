import { useLocation, useParams } from 'react-router'
import Converter from '../components/Converter.jsx'
import SEOMeta from '../components/SEOMeta.jsx'
import { units } from '../data/units.js'

const SITE_URL = 'https://convert-fast.com'

/**
 * Maps URL path segments to units registry keys.
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
 * Parse a pair slug like "meter-to-foot" into unit ids.
 * Normalises slugs to registry ids (lowercase, hyphens → underscores).
 */
function parsePair(pair) {
  if (!pair) return { from: undefined, to: undefined }

  const match = pair.match(/^(.+)-to-(.+)$/i)
  if (!match) return { from: pair, to: undefined }

  const normalise = (slug) => slug.toLowerCase().replace(/[-\s]+/g, '_')

  return {
    from: normalise(match[1]),
    to: normalise(match[2]),
  }
}

/**
 * Look up a unit's label in the registry. Returns undefined if not found.
 */
function getUnitLabel(category, unitId) {
  return units[category]?.units.find((u) => u.id === unitId)?.label
}

/**
 * Pretty-print a registry key as a title (e.g. "data_storage" → "Data Storage").
 */
function toTitle(key) {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function PairPage() {
  const { pathname } = useLocation()
  const { pair } = useParams()
  const { from, to } = parsePair(pair)

  // Derive category from the first path segment
  const segment = pathname.split('/')[1] ?? ''
  const category = PATH_TO_REGISTRY[segment] ?? segment

  const fromLabel = getUnitLabel(category, from)
  const toLabel = getUnitLabel(category, to)

  // Graceful fallback — units not found in registry
  if (!fromLabel || !toLabel) {
    return (
      <main>
        <h1>Converter Not Found</h1>
        <p>
          Sorry, we couldn&apos;t find a converter for &ldquo;{pair}&rdquo;
          in the <strong>{toTitle(category)}</strong> category.
        </p>
      </main>
    )
  }

  const h1 = `${fromLabel} to ${toLabel} Converter`
  const pageTitle = `${fromLabel} to ${toLabel} Converter | Convert Fast`
  const description = `Convert ${fromLabel} to ${toLabel} instantly. Free online ${toTitle(category)} converter.`
  const canonical = `${SITE_URL}/${segment}/${pair}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: h1,
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

  return (
    <main>
      <SEOMeta
        title={pageTitle}
        description={description}
        canonical={canonical}
        jsonLd={jsonLd}
      />
      <h1>{h1}</h1>
      <Converter
        category={category}
        defaultFrom={from}
        defaultTo={to}
      />
    </main>
  )
}

export default PairPage
