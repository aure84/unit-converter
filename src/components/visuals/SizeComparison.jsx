function SizeComparison({ items, label }) {
  if (!items?.length) return null

  const colW = 90
  const totalW = items.length * colW + 40

  return (
    <figure style={{ margin: '1.5rem 0' }}>
      {label && (
        <figcaption style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
          {label}
        </figcaption>
      )}
      <svg
        viewBox={`0 0 ${totalW} 140`}
        role="img"
        aria-label={label ?? 'Size comparison'}
        style={{ width: '100%', maxWidth: Math.min(560, totalW * 1.5), display: 'block', margin: '0 auto' }}
      >
        {items.map((item, i) => {
          const cx = 20 + i * colW + colW / 2
          const fontSize = Math.max(12, item.relativeSize * 52)
          return (
            <g key={item.emoji ?? i}>
              <text x={cx} y="90" textAnchor="middle" fontSize={fontSize} dominantBaseline="alphabetic">
                {item.emoji}
              </text>
              <text x={cx} y="112" textAnchor="middle" fontSize="10" fill="var(--text)">
                {item.label}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

export default SizeComparison
