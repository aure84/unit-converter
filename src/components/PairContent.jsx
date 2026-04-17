import { generatePairContent } from '../data/pairContent.js'
import { getUnit } from '../data/units.js'
import './CategoryContent.css'  // reuse same styles

function PairContent({ category, fromUnit, toUnit }) {
  const fromObj = getUnit(category, fromUnit)
  const toObj   = getUnit(category, toUnit)

  if (!fromObj || !toObj) return null

  const { intro, faq } = generatePairContent(category, fromObj, toObj)

  return (
    <section className="cat-content">
      <p className="cat-content__intro">{intro}</p>

      <div className="cat-content__faq">
        <h2 className="cat-content__faq-title">Frequently Asked Questions</h2>
        <div className="cat-content__faq-list">
          {faq.map(({ q, a }) => (
            <details key={q} className="cat-content__faq-item">
              <summary className="cat-content__faq-q">{q}</summary>
              <p className="cat-content__faq-a">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PairContent
