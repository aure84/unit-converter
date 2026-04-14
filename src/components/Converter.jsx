import { useState, useRef, useCallback } from 'react'
import { units } from '../data/units.js'
import { convert } from '../utils/convert.js'
import './Converter.css'

/**
 * Format a number to at most 6 significant figures, stripping trailing zeros.
 * Returns an empty string for non-finite results.
 */
function formatResult(value) {
  if (!isFinite(value)) return ''
  // toPrecision gives 6 sig figs, parseFloat removes trailing zeros
  return String(parseFloat(value.toPrecision(6)))
}

/**
 * Converter — bidirectional unit converter for a single category.
 *
 * Props:
 *   category    {string}  — key from units registry (e.g. 'length')
 *   defaultFrom {string}  — unit id for the left/top input
 *   defaultTo   {string}  — unit id for the right/bottom input
 */
function Converter({ category, defaultFrom, defaultTo }) {
  const categoryData = units[category]
  const unitList = categoryData?.units ?? []

  // Resolve defaults to first two units if props are missing/invalid
  const resolveDefault = (id, fallbackIndex) => {
    if (id && unitList.find((u) => u.id === id)) return id
    return unitList[fallbackIndex]?.id ?? ''
  }

  const [fromUnit, setFromUnit] = useState(() => resolveDefault(defaultFrom, 0))
  const [toUnit, setToUnit] = useState(() => resolveDefault(defaultTo, 1))
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')

  // 'from' | 'to' — tracks which input the user last typed in
  const lastEdited = useRef('from')

  // ── Calculation helpers ──────────────────────────────────────────────────

  const calcTo = useCallback(
    (raw, fUnit, tUnit) => {
      if (raw === '' || raw === '-') return ''
      const num = parseFloat(raw)
      if (!isFinite(num)) return ''
      try {
        return formatResult(convert(num, fUnit, tUnit, category))
      } catch {
        return ''
      }
    },
    [category],
  )

  // ── Input handlers ───────────────────────────────────────────────────────

  function handleFromInput(e) {
    lastEdited.current = 'from'
    const val = e.target.value
    setFromValue(val)
    setToValue(calcTo(val, fromUnit, toUnit))
  }

  function handleToInput(e) {
    lastEdited.current = 'to'
    const val = e.target.value
    setToValue(val)
    setFromValue(calcTo(val, toUnit, fromUnit))
  }

  // ── Unit select handlers — recalculate the passive field ─────────────────

  function handleFromUnitChange(e) {
    const newUnit = e.target.value
    setFromUnit(newUnit)
    if (lastEdited.current === 'from') {
      setToValue(calcTo(fromValue, newUnit, toUnit))
    } else {
      setFromValue(calcTo(toValue, toUnit, newUnit))
    }
  }

  function handleToUnitChange(e) {
    const newUnit = e.target.value
    setToUnit(newUnit)
    if (lastEdited.current === 'from') {
      setToValue(calcTo(fromValue, fromUnit, newUnit))
    } else {
      setFromValue(calcTo(toValue, newUnit, fromUnit))
    }
  }

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="converter">
      <div className="converter__field">
        <label htmlFor="converter-from-select" className="converter__label">
          From
        </label>
        <select
          id="converter-from-select"
          className="converter__select"
          value={fromUnit}
          onChange={handleFromUnitChange}
          aria-label="From unit"
        >
          {unitList.map((u) => (
            <option key={u.id} value={u.id}>
              {u.label} ({u.symbol})
            </option>
          ))}
        </select>
        <input
          id="converter-from-input"
          type="number"
          className="converter__input"
          value={fromValue}
          onChange={handleFromInput}
          placeholder="0"
          aria-label={`Value in ${unitList.find((u) => u.id === fromUnit)?.label ?? fromUnit}`}
          inputMode="decimal"
        />
      </div>

      <div className="converter__arrow" aria-hidden="true">⇄</div>

      <div className="converter__field">
        <label htmlFor="converter-to-select" className="converter__label">
          To
        </label>
        <select
          id="converter-to-select"
          className="converter__select"
          value={toUnit}
          onChange={handleToUnitChange}
          aria-label="To unit"
        >
          {unitList.map((u) => (
            <option key={u.id} value={u.id}>
              {u.label} ({u.symbol})
            </option>
          ))}
        </select>
        <input
          id="converter-to-input"
          type="number"
          className="converter__input"
          value={toValue}
          onChange={handleToInput}
          placeholder="0"
          aria-label={`Value in ${unitList.find((u) => u.id === toUnit)?.label ?? toUnit}`}
          inputMode="decimal"
        />
      </div>
    </div>
  )
}

export default Converter
