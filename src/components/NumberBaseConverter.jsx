import { useState } from 'react'
import './ConverterTools.css'

const MAX_VAL = 4294967295

const VALID = {
  10: /^[0-9]*$/,
  2: /^[01]*$/,
  16: /^[0-9a-fA-F]*$/,
  8: /^[0-7]*$/,
}

function updateAll(n, setDecimal, setBinary, setHex, setOctal) {
  setDecimal(String(n))
  setBinary(n.toString(2))
  setHex(n.toString(16).toUpperCase())
  setOctal(n.toString(8))
}

export default function NumberBaseConverter() {
  const [decimal, setDecimal] = useState('255')
  const [binary, setBinary] = useState('11111111')
  const [hex, setHex] = useState('FF')
  const [octal, setOctal] = useState('377')
  const [error, setError] = useState('')

  function handleChange(rawValue, base) {
    const value = base === 16 ? rawValue.toUpperCase() : rawValue

    if (!value) {
      setDecimal(''); setBinary(''); setHex(''); setOctal(''); setError(''); return
    }

    if (!VALID[base].test(value)) {
      setError(`Invalid character for base ${base}`)
      if (base === 10) setDecimal(value)
      else if (base === 2) setBinary(value)
      else if (base === 16) setHex(value)
      else setOctal(value)
      return
    }

    const n = parseInt(value, base)
    if (isNaN(n)) { setError('Invalid input'); return }
    if (n > MAX_VAL) {
      if (base === 10) setDecimal(value)
      else if (base === 2) setBinary(value)
      else if (base === 16) setHex(value)
      else setOctal(value)
      setError('Exceeds 32-bit unsigned max (4,294,967,295)')
      return
    }

    setError('')
    updateAll(n, setDecimal, setBinary, setHex, setOctal)
  }

  const fields = [
    { label: 'Decimal', sublabel: 'Base 10', value: decimal, base: 10, placeholder: '255' },
    { label: 'Binary', sublabel: 'Base 2', value: binary, base: 2, placeholder: '11111111' },
    { label: 'Hexadecimal', sublabel: 'Base 16', value: hex, base: 16, placeholder: 'FF' },
    { label: 'Octal', sublabel: 'Base 8', value: octal, base: 8, placeholder: '377' },
  ]

  return (
    <div className="conv-tool">
      <div className="two-col-grid" style={{ marginBottom: 8 }}>
        {fields.map(({ label, sublabel, value, base, placeholder }) => (
          <div key={base}>
            <label className="conv-tool__label">
              {label} <span style={{ opacity: 0.5 }}>/ {sublabel}</span>
            </label>
            <input
              type="text"
              value={value}
              onChange={e => handleChange(e.target.value, base)}
              placeholder={placeholder}
              className="conv-tool__input"
            />
          </div>
        ))}
      </div>

      {error && <p className="conv-tool__error" style={{ marginBottom: 16 }}>{error}</p>}

      <div className="ref-tables">
        <div className="ref-panel">
          <div className="ref-panel__title">Quick Reference (0–15)</div>
          <table>
            <thead>
              <tr>
                <th>Dec</th>
                <th>Binary</th>
                <th>Hex</th>
                <th>Octal</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 16 }, (_, i) => (
                <tr key={i}>
                  <td className="mono">{i}</td>
                  <td className="mono-accent">{i.toString(2)}</td>
                  <td className="mono">{i.toString(16).toUpperCase()}</td>
                  <td className="mono">{i.toString(8)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
