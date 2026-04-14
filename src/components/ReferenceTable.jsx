import { convert } from '../utils/convert.js'
import { units } from '../data/units.js'
import './ReferenceTable.css'

const COMMON_VALUES = [1, 2, 5, 10, 20, 50, 100, 500, 1000]

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
  if (abs < 1) return parseFloat(value.toPrecision(6)).toString()
  return parseFloat(value.toPrecision(6)).toString()
}

function getUnitInfo(category, unitId) {
  return units[category]?.units.find((u) => u.id === unitId)
}

function ReferenceTable({ category, fromUnit, toUnit }) {
  const fromInfo = getUnitInfo(category, fromUnit)
  const toInfo = getUnitInfo(category, toUnit)

  if (!fromInfo || !toInfo) return null

  const rows = COMMON_VALUES.map((val) => {
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
