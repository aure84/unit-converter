import { Link } from 'react-router'
import { units } from '../data/units.js'
import './CategoryContent.css'

function toSlug(id) {
  return id.replace(/_/g, '-')
}

export default function RelatedConverters({ category, segment, fromUnit, toUnit }) {
  const categoryUnits = units[category]?.units ?? []
  if (categoryUnits.length < 2) return null

  const fromLabel = categoryUnits.find((u) => u.id === fromUnit)?.label
  const toLabel   = categoryUnits.find((u) => u.id === toUnit)?.label
  if (!fromLabel || !toLabel) return null

  const pairs = []

  // Reverse of current pair
  pairs.push({ from: toUnit, to: fromUnit, label: `${toLabel} to ${fromLabel}` })

  // Current from → all others
  for (const unit of categoryUnits) {
    if (unit.id !== fromUnit && unit.id !== toUnit) {
      pairs.push({ from: fromUnit, to: unit.id, label: `${fromLabel} to ${unit.label}` })
    }
  }

  const shown = pairs.slice(0, 6)

  return (
    <section className="cat-content">
      <h2 className="cat-content__section-title">Related Converters</h2>
      <div className="cat-content__featured-grid">
        {shown.map(({ from, to, label }) => (
          <Link
            key={`${from}-${to}`}
            to={`/${segment}/${toSlug(from)}-to-${toSlug(to)}`}
            className="cat-content__featured-link"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '48px' }}
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  )
}
