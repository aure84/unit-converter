import { useState } from 'react'

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
      setError('Exceeds 32-bit unsigned max (4,294,967,295)')
      return
    }

    setError('')
    updateAll(n, setDecimal, setBinary, setHex, setOctal)
  }

  const inputStyle = {
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: 8,
    fontSize: 16,
    width: '100%',
    fontFamily: 'monospace',
    boxSizing: 'border-box',
  }

  const fields = [
    { label: 'Decimal (Base 10)', value: decimal, base: 10, placeholder: '255' },
    { label: 'Binary (Base 2)', value: binary, base: 2, placeholder: '11111111' },
    { label: 'Hexadecimal (Base 16)', value: hex, base: 16, placeholder: 'FF' },
    { label: 'Octal (Base 8)', value: octal, base: 8, placeholder: '377' },
  ]

  return (
    <div style={{ marginBottom: 40 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          marginBottom: 16,
        }}
      >
        {fields.map(({ label, value, base, placeholder }) => (
          <div key={base}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>{label}</label>
            <input
              type="text"
              value={value}
              onChange={e => handleChange(e.target.value, base)}
              placeholder={placeholder}
              style={inputStyle}
            />
          </div>
        ))}
      </div>

      {error && (
        <p style={{ color: '#dc2626', fontWeight: 600, marginBottom: 24 }}>{error}</p>
      )}

      <h2 style={{ fontSize: 18, fontWeight: 700, margin: '32px 0 16px' }}>
        Quick Reference (0–15)
      </h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: '#f3f4f6' }}>
              {['Decimal', 'Binary', 'Hex', 'Octal'].map(h => (
                <th
                  key={h}
                  style={{
                    padding: '8px 20px',
                    textAlign: 'left',
                    borderBottom: '2px solid #e5e7eb',
                    fontFamily: 'monospace',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 16 }, (_, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '5px 20px', fontFamily: 'monospace' }}>{i}</td>
                <td style={{ padding: '5px 20px', fontFamily: 'monospace' }}>{i.toString(2)}</td>
                <td style={{ padding: '5px 20px', fontFamily: 'monospace' }}>{i.toString(16).toUpperCase()}</td>
                <td style={{ padding: '5px 20px', fontFamily: 'monospace' }}>{i.toString(8)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
