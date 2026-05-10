import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'
import NumberBaseConverter from '../components/NumberBaseConverter.jsx'
import '../components/CategoryContent.css'

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

      <section className="cat-content">
        <div className="cat-content__faq">
          <h2 className="cat-content__faq-title">Frequently asked questions</h2>
          <div className="cat-content__faq-list">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="cat-content__faq-item">
                <summary className="cat-content__faq-q">{q}</summary>
                <p className="cat-content__faq-a">{a}</p>
              </details>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <h2 className="cat-content__section-title">Other number tools</h2>
          <ul>
            <li>
              <Link to="/roman-numerals">Roman Numeral Converter</Link> — Decimal to Roman and back
            </li>
            <li>
              <Link to="/data-storage">Data Storage Converter</Link> — Bytes, KB, MB, GB, TB
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
