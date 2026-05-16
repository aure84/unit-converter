import { useState, useMemo } from 'react'
import { SCALE_OBJECTS } from '../data/scaleObjects.js'
import { convert } from '../utils/convert.js'
import { fmtNum } from '../utils/format.js'
import './InteractiveScale.css'

function InteractiveScale({ category, fromUnit, toUnit, fromSymbol, toSymbol, fromLabel }) {
  const objects = SCALE_OBJECTS[`${category}|${fromUnit}`] ?? null
  const [index, setIndex] = useState(() => objects ? Math.floor(objects.length / 2) : 0)

  const converted = useMemo(() => {
    if (!objects) return null
    try { return convert(objects[index].value, fromUnit, toUnit, category) }
    catch { return null }
  }, [objects, index, fromUnit, toUnit, category])

  if (!objects) return null

  const obj = objects[index]
  const fillPct = `${(index / (objects.length - 1)) * 100}%`

  return (
    <section className="interactive-scale cat-content">
      <h2 className="cat-content__section-title">Explore {fromLabel}</h2>

      <div className="interactive-scale__result" aria-live="polite" aria-atomic="true">
        <span className="interactive-scale__emoji-big" role="img" aria-label={obj.label}>
          {obj.emoji}
        </span>
        <span className="interactive-scale__label-big">{obj.label}</span>
        <span className="interactive-scale__conversion">
          {fmtNum(obj.value)} {fromSymbol}
          {converted !== null ? ` = ${fmtNum(converted)} ${toSymbol}` : ''}
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={objects.length - 1}
        step={1}
        value={index}
        onChange={(e) => setIndex(parseInt(e.target.value, 10))}
        className="interactive-scale__slider"
        style={{ '--fill': fillPct }}
        aria-label={`Select ${fromLabel} reference object`}
      />

      <div className="interactive-scale__grid" role="group" aria-label={`${fromLabel} reference objects`}>
        {objects.map((o, i) => (
          <button
            key={o.value}
            className={`interactive-scale__obj${i === index ? ' interactive-scale__obj--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-pressed={i === index}
            type="button"
          >
            <span className="interactive-scale__obj-emoji" role="img" aria-label={o.label}>
              {o.emoji}
            </span>
            <span className="interactive-scale__obj-label">{o.label}</span>
            <span className="interactive-scale__obj-value">{fmtNum(o.value)} {fromSymbol}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default InteractiveScale
