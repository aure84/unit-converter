import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'
import RomanNumeralConverter from '../components/RomanNumeralConverter.jsx'
import '../components/CategoryContent.css'

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
          <h2 className="cat-content__section-title">Other number converters</h2>
          <ul className="cat-content__link-list">
            <li>
              <Link to="/number-base">Number Base Converter</Link> — Convert between decimal,
              binary, hexadecimal, and octal
            </li>
            <li>
              <Link to="/length">Length Converter</Link> — Meters, feet, miles, and more
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
