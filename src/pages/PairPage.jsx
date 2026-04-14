import { useLocation, useParams } from 'react-router'
import Converter from '../components/Converter.jsx'

/**
 * Maps URL path segments to units registry keys.
 */
const PATH_TO_REGISTRY = {
  length:       'length',
  weight:       'weight',
  temperature:  'temperature',
  volume:       'volume',
  area:         'area',
  speed:        'speed',
  time:         'time',
  'data-storage': 'data_storage',
}

/**
 * Parse a pair slug like "meters-to-feet" into unit ids.
 *
 * Strategy:
 *   1. Split on the literal "-to-" separator.
 *   2. Normalise each side by lowercasing and replacing hyphens with
 *      underscores so slugs map cleanly to registry ids.
 *
 * Examples:
 *   "meters-to-feet"           → { from: "meters", to: "feet" }
 *   "kilometer-to-mile"        → { from: "kilometer", to: "mile" }
 *   "celsius-to-fahrenheit"    → { from: "celsius", to: "fahrenheit" }
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

function PairPage() {
  const { pathname } = useLocation()
  const { pair } = useParams()
  const { from, to } = parsePair(pair)

  // Derive category from the first path segment
  const segment = pathname.split('/')[1] ?? ''
  const category = PATH_TO_REGISTRY[segment] ?? segment

  // Human-readable heading: "meters to feet"
  const heading = pair ? pair.replace(/-/g, ' ') : ''

  return (
    <main>
      <h1>{heading}</h1>
      <Converter
        category={category}
        defaultFrom={from}
        defaultTo={to}
      />
    </main>
  )
}

export default PairPage
