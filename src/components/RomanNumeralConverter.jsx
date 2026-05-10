import { useState } from 'react'
import './ConverterTools.css'

const ROMAN_MAP = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
]

function toRoman(n) {
  if (!Number.isInteger(n) || n < 1 || n > 3999) return ''
  let result = ''
  for (const [value, symbol] of ROMAN_MAP) {
    while (n >= value) {
      result += symbol
      n -= value
    }
  }
  return result
}

const ROMAN_REGEX = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i

function fromRoman(s) {
  const upper = s.toUpperCase()
  if (!ROMAN_REGEX.test(upper) || upper === '') return NaN
  let result = 0
  let i = 0
  for (const [value, symbol] of ROMAN_MAP) {
    while (upper.startsWith(symbol, i)) {
      result += value
      i += symbol.length
    }
  }
  return result || NaN
}

export default function RomanNumeralConverter() {
  const [decimal, setDecimal] = useState('2026')
  const [roman, setRoman] = useState('MMXXVI')
  const [decimalError, setDecimalError] = useState('')
  const [romanError, setRomanError] = useState('')

  function handleDecimalChange(e) {
    const raw = e.target.value
    setDecimal(raw)
    setDecimalError('')
    if (!raw) { setRoman(''); return }
    const n = Math.round(parseFloat(raw))
    if (isNaN(n) || n < 1 || n > 3999) {
      setDecimalError('Enter an integer between 1 and 3999')
      setRoman('')
      return
    }
    setRoman(toRoman(n))
    setRomanError('')
  }

  function handleRomanChange(e) {
    const raw = e.target.value.toUpperCase()
    setRoman(raw)
    setRomanError('')
    setDecimalError('')
    if (!raw) { setDecimal(''); return }
    const n = fromRoman(raw)
    if (isNaN(n)) {
      setRomanError('Invalid Roman numeral')
      setDecimal('')
      return
    }
    setDecimal(String(n))
  }

  return (
    <div className="conv-tool">
      <div className="two-col-grid" style={{ marginBottom: 4 }}>
        <div>
          <label className="conv-tool__label">Decimal</label>
          <input
            type="number"
            value={decimal}
            onChange={handleDecimalChange}
            placeholder="1–3999"
            min={1}
            max={3999}
            className="conv-tool__input"
          />
          {decimalError && <p className="conv-tool__error">{decimalError}</p>}
        </div>
        <div>
          <label className="conv-tool__label">Roman Numeral</label>
          <input
            type="text"
            value={roman}
            onChange={handleRomanChange}
            placeholder="MCMXCIX"
            className="conv-tool__input"
            style={{ textTransform: 'uppercase' }}
          />
          {romanError && <p className="conv-tool__error">{romanError}</p>}
        </div>
      </div>

      <div className="ref-tables">
        <div className="ref-panel">
          <div className="ref-panel__title">Symbols</div>
          <table>
            <thead>
              <tr><th>Symbol</th><th>Value</th></tr>
            </thead>
            <tbody>
              {[['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]].map(([sym, val]) => (
                <tr key={sym}>
                  <td className="mono">{sym}</td>
                  <td>{val.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ref-panel" style={{ flex: 2 }}>
          <div className="ref-panel__title">Common Examples</div>
          <table>
            <thead>
              <tr><th>Decimal</th><th>Roman Numeral</th></tr>
            </thead>
            <tbody>
              {[
                [2026, 'MMXXVI'],
                [2024, 'MMXXIV'],
                [1999, 'MCMXCIX'],
                [1776, 'MDCCLXXVI'],
                [42, 'XLII'],
                [14, 'XIV'],
                [9, 'IX'],
                [4, 'IV'],
              ].map(([dec, rom]) => (
                <tr key={dec}>
                  <td>{dec}</td>
                  <td className="mono-accent">{rom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
