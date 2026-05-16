import { Link } from 'react-router'
import ScaleDiagram from './visuals/ScaleDiagram.jsx'
import { VALUE_ENRICHMENT } from '../data/pairContent.js'
import './ValueResult.css'

function fmtNum(n) {
  return parseFloat(n.toPrecision(6)).toLocaleString('en-US')
}

function ValueResult({ value, result, fromSymbol, toSymbol, fromLabel, toLabel, category, from, to, segment }) {
  const enrichment = VALUE_ENRICHMENT[`${category}|${from}|${to}`] ?? null

  const relatedValues = enrichment?.getRelated(value) ?? []
  const faqs = enrichment ? enrichment.faqs(value, result) : []

  return (
    <div className="value-result">
      <h1>
        {fmtNum(value)} {fromSymbol} = {fmtNum(result)} {toSymbol}
      </h1>
      <p>Use the converter below to try other values.</p>

      {enrichment && (
        <div className="value-result__enrichment">
          <p className="value-result__context">{enrichment.getContext(value, result)}</p>

          <div className="value-result__formula">
            <code>{enrichment.formula}</code>
            <span>{enrichment.formulaNote}</span>
          </div>

          {enrichment.scale && (
            <ScaleDiagram
              value={value}
              unit={fromSymbol}
              min={enrichment.scale.min}
              max={enrichment.scale.max}
              markers={enrichment.scale.markers}
              label={`Where ${fmtNum(value)} ${fromLabel} sits`}
            />
          )}

          {relatedValues.length > 0 && (
            <div className="value-result__related">
              <h2>Related conversions</h2>
              <ul>
                {relatedValues.map((v) => (
                  <li key={v}>
                    <Link to={`/${segment}/${v}-${from.replace(/_/g, '-')}-to-${to.replace(/_/g, '-')}`}>
                      {fmtNum(v)} {fromLabel} to {toLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {faqs.length > 0 && (
            <div className="value-result__faqs cat-content__faq-list">
              {faqs.map(({ q, a }) => (
                <details key={q} className="cat-content__faq-item">
                  <summary className="cat-content__faq-q">{q}</summary>
                  <p className="cat-content__faq-a">{a}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ValueResult
