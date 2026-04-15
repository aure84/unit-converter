import { convert } from '../utils/convert.js'
import { units } from '../data/units.js'
import './ReferenceTable.css'

const COMMON_VALUES = [1, 2, 5, 10, 20, 50, 100, 500, 1000]

// Context-specific presets for pairs where generic values are not useful
const PAIR_OVERRIDES = {
  'bar|psi':                           [1.5, 1.8, 2.0, 2.2, 2.4, 2.5, 2.6, 2.8, 3.0],
  'psi|bar':                           [22, 26, 29, 32, 35, 36, 38, 40, 44],
  'mile_per_gallon|liter_per_100km':   [15, 20, 25, 30, 35, 40, 45, 50, 60],
  'liter_per_100km|mile_per_gallon':   [4, 5, 6, 7, 8, 9, 10, 12, 15],
  'mile_per_gallon_uk|liter_per_100km': [15, 20, 25, 30, 35, 40, 45, 50, 60],
  'liter_per_100km|mile_per_gallon_uk': [4, 5, 6, 7, 8, 9, 10, 12, 15],
}

/**
 * Format a converted number for display.
 * - Small results (<0.001): exponential notation
 * - < 1: up to 6 significant figures
 * - >= 1: up to 4 significant figures, strip trailing zeros
 */
function formatResult(value) {
  if (!isFinite(value)) return '—'
  const abs = Math.abs(value)
  if (abs === 0) return '0'
  if (abs < 0.001) return value.toExponential(3)
  return parseFloat(value.toPrecision(6)).toString()
}

function getUnitInfo(category, unitId) {
  return units[category]?.units.find((u) => u.id === unitId)
}

function ReferenceTable({ category, fromUnit, toUnit }) {
  const fromInfo = getUnitInfo(category, fromUnit)
  const toInfo = getUnitInfo(category, toUnit)

  if (!fromInfo || !toInfo) return null

  const values = PAIR_OVERRIDES[`${fromUnit}|${toUnit}`] ?? COMMON_VALUES

  const rows = values.map((val) => {
    let result
    try {
      result = convert(val, fromUnit, toUnit, category)
    } catch {
      result = NaN
    }
    return { input: val, output: result }
  })

  return (
    <section className="ref-table-section">
      <h2 className="ref-table-heading">
        {fromInfo.label} to {toInfo.label} Reference Table
      </h2>
      <div className="ref-table-wrap">
        <table className="ref-table">
          <thead>
            <tr>
              <th scope="col">
                {fromInfo.label}
                <span className="ref-table-symbol"> ({fromInfo.symbol})</span>
              </th>
              <th scope="col">
                {toInfo.label}
                <span className="ref-table-symbol"> ({toInfo.symbol})</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ input, output }) => (
              <tr key={input}>
                <td>{input}</td>
                <td>{formatResult(output)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ReferenceTable
