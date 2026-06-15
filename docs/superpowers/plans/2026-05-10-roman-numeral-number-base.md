# Roman Numeral + Number Base Converters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Roman Numeral and Number Base converters to convert-fast.com as new standalone categories.

**Architecture:** Each converter follows the `CurrencyPage` standalone pattern: a dedicated converter component (`src/components/`) containing all logic and UI, plus a Page component (`src/pages/`) that wraps it with `SEOMeta`, an `h1`, FAQ, and internal links. Routes added to `App.jsx`. Category cards added to `HomePage.jsx`.

**Tech Stack:** React 18, JSX (no TypeScript), react-router (not react-router-dom), inline styles, `SEOMeta.jsx` from `../components/SEOMeta.jsx`.

---

## File Map

| Action | Path | Purpose |
|--------|------|---------|
| Create | `src/components/RomanNumeralConverter.jsx` | Bidirectional decimal↔Roman logic + UI |
| Create | `src/pages/RomanNumeralPage.jsx` | Full page with SEOMeta, h1, FAQ |
| Create | `src/components/NumberBaseConverter.jsx` | Four-way base converter logic + UI |
| Create | `src/pages/NumberBasePage.jsx` | Full page with SEOMeta, h1, FAQ |
| Modify | `src/App.jsx` | Add 2 imports + routes |
| Modify | `src/pages/HomePage.jsx` | Add 2 category cards to CATEGORIES array |
| Modify | `src/data/blogPosts.js` | Add outgoing links from blog posts to new pages |

---

### Task 1: Roman Numeral converter component

**Files:**
- Create: `src/components/RomanNumeralConverter.jsx`

- [ ] **Step 1: Create the component**

```jsx
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
    border: '2px solid #e5e7eb',
    borderRadius: 8,
    fontSize: 20,
    width: '100%',
    fontFamily: 'monospace',
    boxSizing: 'border-box',
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
          <tr style={{ background: '#f3f4f6' }}>
            <th style={{ padding: '8px 24px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Symbol</th>
            <th style={{ padding: '8px 24px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {[['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]].map(
            ([sym, val]) => (
              <tr key={sym} style={{ borderBottom: '1px solid #f3f4f6' }}>
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
          <tr style={{ background: '#f3f4f6' }}>
            <th style={{ padding: '8px 24px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Decimal</th>
            <th style={{ padding: '8px 24px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>Roman Numeral</th>
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
            <tr key={dec} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '6px 24px' }}>{dec}</td>
              <td style={{ padding: '6px 24px', fontFamily: 'monospace' }}>{rom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

- [ ] **Step 2: Smoke-test mentally**

Trace `handleDecimalChange` with input "1999":
- n = 1999, in range → toRoman(1999) → M(1000) CM(900) XC(90) IX(9) → "MCMXCIX" ✓

Trace `handleRomanChange` with input "XIV":
- ROMAN_REGEX.test("XIV") → X(10) IV(4) → 14 ✓

- [ ] **Step 3: Commit**

```bash
git add src/components/RomanNumeralConverter.jsx
git commit -m "feat: add Roman Numeral converter component"
```

---

### Task 2: Roman Numeral page

**Files:**
- Create: `src/pages/RomanNumeralPage.jsx`

- [ ] **Step 1: Create the page**

```jsx
import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'
import RomanNumeralConverter from '../components/RomanNumeralConverter.jsx'

const SITE_URL = 'https://convert-fast.com'

const FAQ = [
  {
    q: 'What is the Roman numeral for 2026?',
    a: 'The Roman numeral for 2026 is MMXXVI. MM = 2000, XX = 20, VI = 6.',
  },
  {
    q: 'What is the largest Roman numeral?',
    a: 'The largest standard Roman numeral is MMMCMXCIX = 3,999. The M symbol can repeat at most three times, so 4,000 cannot be expressed in standard notation.',
  },
  {
    q: 'How do you write 1999 in Roman numerals?',
    a: '1999 is MCMXCIX. M = 1000, CM = 900 (one hundred less than one thousand), XC = 90 (ten less than one hundred), IX = 9 (one less than ten).',
  },
]

export default function RomanNumeralPage() {
  return (
    <main>
      <SEOMeta
        title="Roman Numeral Converter — Decimal to Roman & Back"
        description="Convert any number 1–3999 to Roman numerals instantly. Also converts Roman numerals back to decimal. Free, no sign-up."
        canonical={`${SITE_URL}/roman-numerals`}
      />
      <h1>Roman Numeral Converter</h1>
      <p>Enter a decimal number (1–3999) or type a Roman numeral — both fields update live.</p>

      <RomanNumeralConverter />

      <section>
        <h2>Frequently asked questions</h2>
        {FAQ.map(({ q, a }) => (
          <div key={q} style={{ marginBottom: 24 }}>
            <h3 style={{ marginBottom: 8 }}>{q}</h3>
            <p style={{ color: '#4b5563' }}>{a}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Other number converters</h2>
        <ul>
          <li>
            <Link to="/number-base">Number Base Converter</Link> — Convert between decimal,
            binary, hexadecimal, and octal
          </li>
          <li>
            <Link to="/length">Length Converter</Link> — Meters, feet, miles, and more
          </li>
        </ul>
      </section>
    </main>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/RomanNumeralPage.jsx
git commit -m "feat: add Roman Numeral page"
```

---

### Task 3: Number Base converter component

**Files:**
- Create: `src/components/NumberBaseConverter.jsx`

- [ ] **Step 1: Create the component**

```jsx
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
```

- [ ] **Step 2: Smoke-test mentally**

Trace `handleChange('FF', 16)`:
- value = 'FF', VALID[16].test('FF') = true
- parseInt('FF', 16) = 255, ≤ MAX_VAL
- setDecimal('255'), setBinary('11111111'), setHex('FF'), setOctal('377') ✓

Trace `handleChange('100000000', 2)` (256 in binary):
- parseInt('100000000', 2) = 256, ≤ MAX_VAL
- setDecimal('256'), setBinary('100000000'), setHex('100'), setOctal('400') ✓

- [ ] **Step 3: Commit**

```bash
git add src/components/NumberBaseConverter.jsx
git commit -m "feat: add Number Base converter component"
```

---

### Task 4: Number Base page

**Files:**
- Create: `src/pages/NumberBasePage.jsx`

- [ ] **Step 1: Create the page**

```jsx
import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'
import NumberBaseConverter from '../components/NumberBaseConverter.jsx'

const SITE_URL = 'https://convert-fast.com'

const FAQ = [
  {
    q: 'How do you convert decimal to binary?',
    a: 'Repeatedly divide by 2, recording the remainder each time. Read remainders from bottom to top. Example: 13 ÷ 2 = 6 R1, 6 ÷ 2 = 3 R0, 3 ÷ 2 = 1 R1, 1 ÷ 2 = 0 R1 → 1101 in binary.',
  },
  {
    q: 'What is hexadecimal used for?',
    a: 'Hexadecimal (base 16) is used in computing to represent binary data compactly. One hex digit represents exactly 4 binary bits, making it easy to read memory addresses, color codes (#FF5733), and byte values.',
  },
  {
    q: 'How do you convert binary to octal?',
    a: 'Group the binary digits into groups of 3 from right to left, padding with leading zeros if needed. Convert each group to its octal digit. Example: 101110 → 101 110 → 5 6 → 56 in octal.',
  },
]

export default function NumberBasePage() {
  return (
    <main>
      <SEOMeta
        title="Number Base Converter — Decimal, Binary, Hex, Octal"
        description="Convert numbers between decimal, binary, hexadecimal, and octal instantly. Free online base converter — no sign-up required."
        canonical={`${SITE_URL}/number-base`}
      />
      <h1>Number Base Converter</h1>
      <p>
        Edit any field — decimal, binary, hex, or octal — and all others update instantly. Supports
        values up to 4,294,967,295 (unsigned 32-bit max).
      </p>

      <NumberBaseConverter />

      <section>
        <h2>Frequently asked questions</h2>
        {FAQ.map(({ q, a }) => (
          <div key={q} style={{ marginBottom: 24 }}>
            <h3 style={{ marginBottom: 8 }}>{q}</h3>
            <p style={{ color: '#4b5563' }}>{a}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Other number tools</h2>
        <ul>
          <li>
            <Link to="/roman-numerals">Roman Numeral Converter</Link> — Decimal to Roman and back
          </li>
          <li>
            <Link to="/data-storage">Data Storage Converter</Link> — Bytes, KB, MB, GB, TB
          </li>
        </ul>
      </section>
    </main>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/NumberBasePage.jsx
git commit -m "feat: add Number Base page"
```

---

### Task 5: Wire routes in App.jsx

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add imports**

At the top of `src/App.jsx`, after the existing import block, add:
```jsx
import RomanNumeralPage from './pages/RomanNumeralPage.jsx'
import NumberBasePage from './pages/NumberBasePage.jsx'
```

- [ ] **Step 2: Add routes**

Inside `<Route element={<Layout />}>`, after the currency route (`<Route path="/currency" element={<CurrencyPage />} />`), add:
```jsx
        {/* Standalone number converters */}
        <Route path="/roman-numerals" element={<RomanNumeralPage />} />
        <Route path="/number-base" element={<NumberBasePage />} />
```

- [ ] **Step 3: Verify no syntax errors**

Run: `cd unit-converter && npm run build 2>&1 | head -20`
Expected: build succeeds (or only pre-existing warnings).

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: wire roman-numerals and number-base routes"
```

---

### Task 6: Add category cards to HomePage.jsx

**Files:**
- Modify: `src/pages/HomePage.jsx`

- [ ] **Step 1: Add entries to the CATEGORIES array**

In `src/pages/HomePage.jsx`, find the end of the `CATEGORIES` array (just before the closing `]` on line ~218, after the torque entry). Add:

```jsx
  {
    id: 'roman-numerals',
    path: '/roman-numerals',
    label: 'Roman Numerals',
    icon: 'Ⅻ',
    pairs: [
      { label: '2026 → MMXXVI',    path: '/roman-numerals' },
      { label: '1999 → MCMXCIX',   path: '/roman-numerals' },
      { label: 'XLII → 42',        path: '/roman-numerals' },
    ],
  },
  {
    id: 'number-base',
    path: '/number-base',
    label: 'Number Base',
    icon: '01',
    pairs: [
      { label: 'Decimal → Binary', path: '/number-base' },
      { label: 'Decimal → Hex',    path: '/number-base' },
      { label: 'Binary → Octal',   path: '/number-base' },
    ],
  },
```

- [ ] **Step 2: Verify no syntax errors**

Run: `cd unit-converter && npm run build 2>&1 | head -20`
Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/pages/HomePage.jsx
git commit -m "feat: add roman numerals and number base cards to home page"
```

---

### Task 7: Internal links from blog posts

**Files:**
- Modify: `src/data/blogPosts.js`

The spec calls for these incoming blog links:
- `columbus-unit-error` → Roman Numeral (historical/numbers angle)
- `us-metric-history` → Roman Numeral (counting systems angle)
- `data-storage-units` → Number Base (binary and data angle)
- `us-metric-history` → Number Base (counting systems angle)

- [ ] **Step 1: Read the blog post file to find the relevant posts**

Run: `grep -n "slug:" src/data/blogPosts.js | grep -E "columbus|us-metric|data-storage"`

Find the `relatedLinks` array for each of these posts.

- [ ] **Step 2: Add Roman Numeral link to columbus-unit-error**

Find the `columbus-unit-error` post. In its `relatedLinks` array, add:
```javascript
{ label: 'Roman Numeral Converter', path: '/roman-numerals' },
```

- [ ] **Step 3: Add both links to us-metric-history**

Find the `us-metric-history` post. In its `relatedLinks` array, add:
```javascript
{ label: 'Roman Numeral Converter', path: '/roman-numerals' },
{ label: 'Number Base Converter', path: '/number-base' },
```

- [ ] **Step 4: Add Number Base link to data-storage-units**

Find the `data-storage-units` post. In its `relatedLinks` array, add:
```javascript
{ label: 'Number Base Converter', path: '/number-base' },
```

- [ ] **Step 5: Verify no syntax errors**

Run: `cd unit-converter && npm run build 2>&1 | head -20`
Expected: build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/data/blogPosts.js
git commit -m "feat: add internal links to new converters from blog posts"
```

---

### Task 8: Localhost check + push

- [ ] **Step 1: Run dev server**

```bash
cd unit-converter && npm run dev
```

Visit and verify:
- `http://localhost:5173/roman-numerals` — type "1999" in Decimal field → Roman field shows "MCMXCIX". Type "XIV" in Roman field → Decimal shows "14". Type "4000" in Decimal → shows error.
- `http://localhost:5173/number-base` — type "255" in Decimal → Binary="11111111", Hex="FF", Octal="377". Type "FF" in Hex → all update correctly. Type "2" in Binary field → shows invalid character error.
- `http://localhost:5173/` — scroll down to grid → verify Roman Numerals and Number Base cards appear.
- Check that the FAQ sections render on both new pages.

- [ ] **Step 2: Push**

```bash
git push origin main
```
