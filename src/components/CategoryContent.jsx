import { Link } from 'react-router'
import { categoryContent } from '../data/content.js'
import { CATEGORY_FAQ } from '../data/pairContent.js'
import './CategoryContent.css'

function CategoryContent({ category }) {
  const content = categoryContent[category]
  if (!content) return null

  // content.faq and CATEGORY_FAQ can list the same question; dedupe by `q` so
  // the FAQ list never renders two children with the same React key.
  const faq = [...(content.faq ?? []), ...(CATEGORY_FAQ[category] ?? [])]
    .filter((item, i, arr) => arr.findIndex((x) => x.q === item.q) === i)

  return (
    <section className="cat-content">
      <p className="cat-content__intro">{content.intro}</p>

      {content.featuredPairs && content.featuredPairs.length > 0 && (
        <div className="cat-content__featured">
          <h2 className="cat-content__section-title">Popular conversions</h2>
          <div className="cat-content__featured-grid">
            {content.featuredPairs.map(({ label, path }) => (
              <Link key={path} to={path} className="cat-content__featured-link">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {content.explanation && (
        <div className="cat-content__explanation">
          <h2 className="cat-content__section-title">How it works</h2>
          <p className="cat-content__explanation-text">{content.explanation}</p>
        </div>
      )}

      {content.examples && content.examples.length > 0 && (
        <div className="cat-content__examples">
          <h2 className="cat-content__section-title">Quick reference</h2>
          <div className="cat-content__examples-grid">
            {content.examples.map(({ label, to }) => (
              <div key={`${label}->${to}`} className="cat-content__example-card">
                <div className="cat-content__example-from">{label}</div>
                <div className="cat-content__example-arrow">→</div>
                <div className="cat-content__example-to">{to}</div>
              </div>
            ))}
          </div>
        </div>
      )}

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

export default CategoryContent
