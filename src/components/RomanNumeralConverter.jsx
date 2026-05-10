import { useState } from 'react'

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
    if (!raw) { setDecimal(''); return }
    const n = fromRoman(raw)
    if (isNaN(n)) {
      setRomanError('Invalid Roman numeral')
      setDecimal('')
      return
    }
    setDecimal(String(n))
    setDecimalError('')
  }

  const inputStyle = {
    padding: '12px 16px',
    border: '2px solid var(--border)',
    borderRadius: 8,
    fontSize: 20,
    width: '100%',
    fontFamily: 'monospace',
    boxSizing: 'border-box',
    background: 'var(--bg)',
    color: 'var(--text-h)',
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 8 }}>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Decimal</label>
          <input
            type="number"
            value={decimal}
            onChange={handleDecimalChange}
            placeholder="1–3999"
            min={1}
            max={3999}
            style={inputStyle}
          />
          {decimalError && (
            <p style={{ color: '#dc2626', fontSize: 13, marginTop: 4 }}>{decimalError}</p>
          )}
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Roman Numeral</label>
          <input
            type="text"
            value={roman}
            onChange={handleRomanChange}
            placeholder="MCMXCIX"
            style={{ ...inputStyle, textTransform: 'uppercase' }}
          />
          {romanError && (
            <p style={{ color: '#dc2626', fontSize: 13, marginTop: 4 }}>{romanError}</p>
          )}
        </div>
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 700, margin: '32px 0 16px' }}>Quick Reference</h2>
      <table style={{ borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead>
          <tr style={{ background: 'var(--code-bg)' }}>
            <th style={{ padding: '8px 24px', textAlign: 'left', borderBottom: '2px solid var(--border)' }}>Symbol</th>
            <th style={{ padding: '8px 24px', textAlign: 'left', borderBottom: '2px solid var(--border)' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {[['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]].map(
            ([sym, val]) => (
              <tr key={sym} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '6px 24px', fontFamily: 'monospace', fontWeight: 700, fontSize: 18 }}>{sym}</td>
                <td style={{ padding: '6px 24px' }}>{val}</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>Common Examples</h2>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: 'var(--code-bg)' }}>
            <th style={{ padding: '8px 24px', textAlign: 'left', borderBottom: '2px solid var(--border)' }}>Decimal</th>
            <th style={{ padding: '8px 24px', textAlign: 'left', borderBottom: '2px solid var(--border)' }}>Roman Numeral</th>
          </tr>
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
            <tr key={dec} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '6px 24px' }}>{dec}</td>
              <td style={{ padding: '6px 24px', fontFamily: 'monospace' }}>{rom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
