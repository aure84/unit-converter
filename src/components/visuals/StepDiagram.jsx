// Numbered step sequence with dashed connector lines.
// Props: steps ([{title, description}]), label (string)
function StepDiagram({ steps, label }) {
  if (!steps?.length) return null

  const rowH = 64
  const totalH = steps.length * rowH + 20

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
        aria-label={label ?? 'Step diagram'}
        style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        {steps.map((step, i) => {
          const y = 10 + i * rowH
          const isLast = i === steps.length - 1
          return (
            <g key={step.title ?? i}>
              {!isLast && (
                <line
                  x1="22" y1={y + 42} x2="22" y2={y + rowH}
                  stroke="var(--border)" strokeWidth="2" strokeDasharray="4 3"
                />
              )}
              <circle cx="22" cy={y + 20} r="18" fill="var(--accent)" />
              <text x="22" y={y + 25} textAnchor="middle" fontSize="13" fontWeight="700" fill="white">
                {i + 1}
              </text>
              <text x="52" y={y + 16} fontSize="12" fontWeight="600" fill="var(--text-h)">
                {step.title}
              </text>
              <text x="52" y={y + 33} fontSize="10" fill="var(--text)">
                {step.description}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

export default StepDiagram
