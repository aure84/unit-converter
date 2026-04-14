import { categoryContent } from '../data/content.js'
import './CategoryContent.css'

function CategoryContent({ category }) {
  const content = categoryContent[category]
  if (!content) return null

  return (
    <section className="cat-content">
      <p className="cat-content__intro">{content.intro}</p>

      <div className="cat-content__faq">
        <h2 className="cat-content__faq-title">Frequently Asked Questions</h2>
        <dl className="cat-content__faq-list">
          {content.faq.map(({ q, a }) => (
            <details key={q} className="cat-content__faq-item">
              <summary className="cat-content__faq-q">{q}</summary>
              <dd className="cat-content__faq-a">{a}</dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default CategoryContent
