import { useLocation, useParams } from 'react-router'
import Converter from '../components/Converter.jsx'
import ReferenceTable from '../components/ReferenceTable.jsx'
import PairContent from '../components/PairContent.jsx'
import RelatedConverters from '../components/RelatedConverters.jsx'
import SEOMeta from '../components/SEOMeta.jsx'
import ValueResult from '../components/ValueResult.jsx'
import { units, getUnit } from '../data/units.js'
import { generatePairContent, PAIR_META } from '../data/pairContent.js'
import { convert } from '../utils/convert.js'

const SITE_URL = 'https://convert-fast.com'

/**
 * Maps URL path segments to units registry keys.
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
}

/**
 * Parse a pair slug like "meter-to-foot" into unit ids.
 * Normalises slugs to registry ids (lowercase, hyphens → underscores).
 */
function parsePair(pair) {
  if (!pair) return { value: null, from: undefined, to: undefined }

  const normalise = (s) => s.toLowerCase().replace(/[-\s]+/g, '_')

  // Detect optional numeric prefix: "3300-pound-to-kilogram" or "-10-celsius-to-fahrenheit"
  let value = null
  let slug = pair
  const valueMatch = pair.match(/^(-?\d+(?:\.\d+)?)-(.+)$/)
  if (valueMatch) {
    const candidate = parseFloat(valueMatch[1])
    const remainder = valueMatch[2]
    if (!isNaN(candidate) && /^.+-to-.+$/.test(remainder)) {
      value = candidate
      slug = remainder
    }
  }

  const match = slug.match(/^(.+?)-to-(.+)$/i)
  if (!match) return { value, from: slug, to: undefined }

  return {
    value,
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
  const { pathname, search } = useLocation()
  const { pair } = useParams()
  const initialValue = new URLSearchParams(search).get('value') ?? undefined
  const { value, from, to } = parsePair(pair)

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
  const pairKey = `${from}|${to}`
  const description = PAIR_META[pairKey]?.description
    ?? `Convert ${fromLabel} to ${toLabel} instantly. Free online ${toTitle(category)} converter.`
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

  const fromObj = getUnit(category, from)
  const toObj   = getUnit(category, to)

  // Compute value-specific result (null if no value or conversion fails)
  let valueResult = null
  if (value !== null && fromObj && toObj) {
    try {
      valueResult = convert(value, from, to, category)
    } catch {
      // Unknown units — treat as generic pair page
    }
  }

  const converterInitialValue = (value !== null && valueResult !== null)
    ? String(value)
    : initialValue

  const { faq } = (fromObj && toObj) ? generatePairContent(category, fromObj, toObj) : { faq: [] }

  const faqJsonLd = faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
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
      {value !== null && valueResult !== null ? (
        <ValueResult
          value={value}
          from={from}
          to={to}
          fromSymbol={fromObj.symbol}
          toSymbol={toObj.symbol}
          category={category}
        />
      ) : (
        <h1>{h1}</h1>
      )}
      <Converter
        key={`${category}/${from}/${to}`}
        category={category}
        defaultFrom={from}
        defaultTo={to}
        initialValue={converterInitialValue}
      />
      <ReferenceTable
        category={category}
        fromUnit={from}
        toUnit={to}
      />
      <PairContent
        category={category}
        fromUnit={from}
        toUnit={to}
      />
      <RelatedConverters
        category={category}
        segment={segment}
        fromUnit={from}
        toUnit={to}
      />
    </main>
  )
}

export default PairPage
