import { convert } from '../utils/convert.js'

function fmtNum(n) {
  return parseFloat(n.toPrecision(6)).toLocaleString('en-US')
}

function ValueResult({ value, from, to, fromSymbol, toSymbol, category }) {
  let result
  try {
    result = convert(value, from, to, category)
  } catch {
    return null
  }
  if (result == null || !isFinite(result)) return null

  return (
    <div className="value-result">
      <h1>
        {fmtNum(value)} {fromSymbol} = {fmtNum(result)} {toSymbol}
      </h1>
      <p>Use the converter below to try other values.</p>
    </div>
  )
}

export default ValueResult
