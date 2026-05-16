// Horizontal scale showing where a value sits among reference markers.
// Props: value (number), unit (string), min (number), max (number),
//        markers ([{value, label}]), label (string, figcaption)
function ScaleDiagram({ value, unit, min, max, markers = [], label }) {
  const toX = (v) => 30 + Math.min(1, Math.max(0, (v - min) / (max - min))) * 340
  const vx = toX(value)
  const fmt = (n) =>
    n >= 1000 ? `${(n / 1000).toLocaleString('en-US')}k` : n.toLocaleString('en-US')

  return (
    <figure style={{ margin: '1.5rem 0' }}>
      {label && (
        <figcaption style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
          {label}
        </figcaption>
      )}
      <svg
        viewBox="0 0 400 90"
        role="img"
        aria-label={label ?? `Scale: ${value} ${unit}`}
        style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        <rect x="30" y="42" width="340" height="8" rx="4" fill="var(--border)" />
        {markers.map((m, i) => {
          const mx = toX(m.value)
          return (
            <g key={i}>
              <line x1={mx} y1="38" x2={mx} y2="54" stroke="var(--text)" strokeWidth="1.5" />
              <text x={mx} y="30" textAnchor="middle" fontSize="9" fill="var(--text)">
                {m.label}
              </text>
              <text x={mx} y="68" textAnchor="middle" fontSize="9" fill="var(--text)">
                {fmt(m.value)}
              </text>
            </g>
          )
        })}
        <circle cx={vx} cy="46" r="8" fill="var(--accent)" />
        <text x={vx} y="82" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-h)">
          {fmt(value)} {unit}
        </text>
      </svg>
    </figure>
  )
}

export default ScaleDiagram
