// Horizontal bar chart for comparing values side-by-side.
// Props: items ([{label, value, unit, highlight?}]), label (string)
function ComparisonChart({ items, label }) {
  if (!items?.length) return null
  const maxVal = Math.max(...items.map((i) => i.value))
  const rowH = 36
  const totalH = items.length * rowH + 40

  return (
    <figure style={{ margin: '1.5rem 0' }}>
      {label && (
        <figcaption style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
          {label}
        </figcaption>
      )}
      <svg
        viewBox={`0 0 400 ${totalH}`}
        role="img"
        aria-label={label ?? 'Comparison chart'}
        style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        {items.map((item) => {
          const barW = Math.max(4, (item.value / maxVal) * 240)
          const i = items.indexOf(item)
          const y = 20 + i * rowH
          const fill = item.highlight ? 'var(--accent)' : 'var(--border)'
          const valFill = item.highlight ? 'var(--accent)' : 'var(--text)'
          const shortLabel = item.label.length > 14 ? `${item.label.slice(0, 13)}…` : item.label
          return (
            <g key={item.label}>
              <text x="0" y={y + 11} fontSize="11" fill="var(--text)">
                {shortLabel}
              </text>
              <rect x="120" y={y} width={barW} height="22" rx="3" fill={fill} />
              <text x={120 + barW + 6} y={y + 11} fontSize="11" fill={valFill}>
                {item.value.toLocaleString('en-US')} {item.unit}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

export default ComparisonChart
