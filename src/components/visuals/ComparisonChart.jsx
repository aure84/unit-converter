// Horizontal bar chart for comparing values side-by-side.
// Props: items ([{label, value, unit, highlight?}]), label (string)
function ComparisonChart({ items, label }) {
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
        aria-label={label ? undefined : 'Comparison chart'}
        aria-hidden={label ? true : undefined}
        style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        {items.map((item, i) => {
          const barW = Math.max(4, (item.value / maxVal) * 240)
          const y = 20 + i * rowH
          const fill = item.highlight ? 'var(--accent)' : 'var(--border)'
          const valFill = item.highlight ? 'var(--accent)' : 'var(--text)'
          return (
            <g key={i}>
              <text x="0" y={y + 14} fontSize="11" fill="var(--text)" dominantBaseline="middle">
                {item.label}
              </text>
              <rect x="120" y={y} width={barW} height="22" rx="3" fill={fill} />
              <text x={120 + barW + 6} y={y + 14} fontSize="11" fill={valFill} dominantBaseline="middle">
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
