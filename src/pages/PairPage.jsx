import { useLocation, useParams, Link } from 'react-router'
import Converter from '../components/Converter.jsx'
import ReferenceTable from '../components/ReferenceTable.jsx'
import PairContent from '../components/PairContent.jsx'
import RelatedConverters from '../components/RelatedConverters.jsx'
import SEOMeta from '../components/SEOMeta.jsx'
import ValueResult from '../components/ValueResult.jsx'
import { units, getUnit } from '../data/units.js'
import { generatePairContent, PAIR_META, VALUE_ENRICHMENT } from '../data/pairContent.js'
import { convert } from '../utils/convert.js'
import { fmtNum } from '../utils/format.js'

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
 * Maps user-friendly URL slugs to their registry IDs.
 * Needed when the symbol/common name differs from the internal id.
 */
const UNIT_ALIASES = {
  ps: 'horsepower_metric',
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

  const resolve = (id) => UNIT_ALIASES[id] ?? id
  return {
    value,
    from: resolve(normalise(match[1])),
    to: resolve(normalise(match[2])),
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

const VALUE_CONTEXT = {
  weight: (value, result, fromUnit, toUnit) => {
    if (fromUnit !== 'pound' || toUnit !== 'kilogram') return null
    let ref
    if (value < 10)         ref = 'a small bag of groceries'
    else if (value < 50)    ref = 'a large dog'
    else if (value < 200)   ref = 'an average adult'
    else if (value < 1000)  ref = 'a grand piano'
    else if (value < 4000)  ref = 'a mid-size car'
    else                    ref = 'a large commercial truck'
    return {
      q: `Is ${fmtNum(value)} lbs heavy?`,
      a: `${fmtNum(value)} lbs (${fmtNum(result)} kg) is roughly the weight of ${ref}.`,
    }
  },
  length: (value, result, fromUnit, toUnit) => {
    if (fromUnit !== 'kilometer' || toUnit !== 'mile') return null
    let ref
    if (value < 1)        ref = 'a short walk'
    else if (value < 5)   ref = 'a brisk morning jog'
    else if (value < 100) ref = 'a short road trip'
    else                  ref = 'a long drive between cities'
    return {
      q: `How far is ${fmtNum(value)} km?`,
      a: `${fmtNum(value)} km (${fmtNum(result)} miles) is about the distance of ${ref}.`,
    }
  },
  temperature: (value, result, fromUnit, toUnit) => {
    if (fromUnit !== 'fahrenheit' || toUnit !== 'celsius') return null
    let desc
    if (value <= 32)       desc = 'at or below freezing — water turns to ice at 32°F'
    else if (value < 60)   desc = "cold — you'll want a coat"
    else if (value < 80)   desc = 'mild and comfortable'
    else if (value < 100)  desc = 'warm — a hot summer day'
    else if (value < 212)  desc = 'hot — above normal body temperature (98.6°F)'
    else                   desc = 'at or above the boiling point of water'
    return {
      q: `Is ${value}°F hot or cold?`,
      a: `${value}°F (${fmtNum(result)}°C) is ${desc}.`,
    }
  },
}

function generateValueFaq(value, result, fromLabel, toLabel, fromSymbol, toSymbol, from, to, category) {
  const fv = fmtNum(value)
  const fr = fmtNum(result)
  const items = [
    {
      q: `What is ${fv} ${fromLabel} in ${toLabel}?`,
      a: `${fv} ${fromLabel} equals ${fr} ${toLabel}.`,
    },
    {
      q: `How many ${toLabel} is ${fv} ${fromLabel}?`,
      a: `${fv} ${fromSymbol} = ${fr} ${toSymbol}.`,
    },
  ]
  const ctx = VALUE_CONTEXT[category]?.(value, result, from, to)
  if (ctx) items.push(ctx)
  return items
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
  const pairKey = `${from}|${to}`
  const canonical = `${SITE_URL}/${segment}/${pair}`

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

  const isValuePage = value !== null && valueResult !== null

  const pageTitle = isValuePage
    ? `${fmtNum(value)} ${fromLabel} to ${toLabel} — ${fmtNum(valueResult)} ${toLabel} | Convert Fast`
    : `${fromLabel} to ${toLabel} Converter | Convert Fast`

  const description = isValuePage
    ? `${fmtNum(value)} ${fromLabel} equals ${fmtNum(valueResult)} ${toLabel}. Free converter for any value.`
    : (PAIR_META[pairKey]?.description
        ?? `Convert ${fromLabel} to ${toLabel} instantly. Free online ${toTitle(category)} converter.`)

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

  const converterInitialValue = (value !== null && valueResult !== null)
    ? String(value)
    : initialValue

  const { faq: pairFaq } = (fromObj && toObj) ? generatePairContent(category, fromObj, toObj) : { faq: [] }

  const valueFaq = (value !== null && valueResult !== null)
    ? generateValueFaq(value, valueResult, fromLabel, toLabel, fromObj.symbol, toObj.symbol, from, to, category)
    : []

  const faq = [...valueFaq, ...pairFaq]

  const faqJsonLd = faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  const hasEnrichment = !!VALUE_ENRICHMENT[`${category}|${from}|${to}`]
  const enrichment = !isValuePage ? (VALUE_ENRICHMENT[`${category}|${from}|${to}`] ?? null) : null
  const commonValues = enrichment?.commonValues ?? []

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
          result={valueResult}
          fromSymbol={fromObj.symbol}
          toSymbol={toObj.symbol}
          fromLabel={fromLabel}
          toLabel={toLabel}
          category={category}
          from={from}
          to={to}
          segment={segment}
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
      {valueFaq.length > 0 && !hasEnrichment && (
        <section className="cat-content">
          <div className="cat-content__faq">
            <h2 className="cat-content__faq-title">Frequently Asked Questions</h2>
            <div className="cat-content__faq-list">
              {valueFaq.map(({ q, a }, i) => (
                <details key={i} className="cat-content__faq-item">
                  <summary className="cat-content__faq-q">{q}</summary>
                  <p className="cat-content__faq-a">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
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
      {commonValues.length > 0 && (
        <section className="cat-content">
          <div className="cat-content__featured">
            <h2 className="cat-content__section-title">Common values</h2>
            <div className="cat-content__featured-grid">
              {commonValues.map((v) => {
                const res = (() => { try { return convert(v, from, to, category) } catch { return null } })()
                if (res === null) return null
                return (
                  <Link
                    key={v}
                    to={`/${segment}/${v}-${from.replace(/_/g, '-')}-to-${to.replace(/_/g, '-')}`}
                    className="cat-content__featured-link"
                  >
                    {fmtNum(v)} {fromObj?.symbol} = {fmtNum(res)} {toObj?.symbol}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default PairPage
