function fmtNum(n) {
  return parseFloat(n.toPrecision(6)).toLocaleString('en-US')
}

function ValueResult({ value, result, fromSymbol, toSymbol }) {
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
