import { useState, useRef, useCallback, useEffect } from 'react'
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
 * Copy text to clipboard with Navigator.clipboard and execCommand fallback.
 * Works on iOS Safari 13.4+, Android Chrome, and all modern desktops.
 */
async function copyToClipboard(text) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    await navigator.clipboard.writeText(text)
    return
  }
  // Fallback for older iOS / Android WebViews
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0'
  document.body.appendChild(textarea)
  // iOS requires a range selection, not just select()
  const range = document.createRange()
  range.selectNodeContents(textarea)
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
  textarea.setSelectionRange(0, 999999)
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

/**
 * Converter — bidirectional unit converter for a single category.
 *
 * Props:
 *   category     {string}  — key from units registry (e.g. 'length')
 *   defaultFrom  {string}  — unit id for the left/top input
 *   defaultTo    {string}  — unit id for the right/bottom input
 *   initialValue {string}  — optional pre-filled value from ?value= URL param
 */
function Converter({ category, defaultFrom, defaultTo, initialValue }) {
  const categoryData = units[category]
  const unitList = categoryData?.units ?? []

  // Resolve defaults to first two units if props are missing/invalid
  const resolveDefault = (id, fallbackIndex) => {
    if (id && unitList.find((u) => u.id === id)) return id
    return unitList[fallbackIndex]?.id ?? ''
  }

  const [fromUnit, setFromUnit] = useState(() => resolveDefault(defaultFrom, 0))
  const [toUnit, setToUnit] = useState(() => resolveDefault(defaultTo, 1))
  const [fromValue, setFromValue] = useState(() => initialValue ?? '')
  const [toValue, setToValue] = useState('')

  // 'from' | 'to' — tracks which input the user last typed in
  const lastEdited = useRef('from')

  // Copy button state: null | 'from' | 'to'
  const [copiedSide, setCopiedSide] = useState(null)
  const copyTimerRef = useRef(null)

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

  // ── Seed toValue when initialValue is provided ───────────────────────────

  useEffect(() => {
    if (initialValue && initialValue !== '') {
      setToValue(calcTo(initialValue, fromUnit, toUnit))
    }
    // Only run on mount — intentionally omitting deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── URL sync (replaceState, no back-button pollution) ────────────────────

  const updateURL = useCallback((val) => {
    const url = new URL(window.location.href)
    if (val === '' || val == null) {
      url.searchParams.delete('value')
    } else {
      url.searchParams.set('value', val)
    }
    window.history.replaceState(null, '', url.toString())
  }, [])

  // ── Input handlers ───────────────────────────────────────────────────────

  function handleFromInput(e) {
    lastEdited.current = 'from'
    const val = e.target.value
    setFromValue(val)
    setToValue(calcTo(val, fromUnit, toUnit))
    updateURL(val)
  }

  function handleToInput(e) {
    lastEdited.current = 'to'
    const val = e.target.value
    setToValue(val)
    setFromValue(calcTo(val, toUnit, fromUnit))
    updateURL(val)
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

  // ── Copy handler ─────────────────────────────────────────────────────────

  function handleCopy(side) {
    const value = side === 'from' ? fromValue : toValue
    const unitId = side === 'from' ? fromUnit : toUnit
    const symbol = unitList.find((u) => u.id === unitId)?.symbol ?? unitId

    if (value === '' || value == null) return

    copyToClipboard(`${value} ${symbol}`).then(() => {
      clearTimeout(copyTimerRef.current)
      setCopiedSide(side)
      copyTimerRef.current = setTimeout(() => setCopiedSide(null), 2000)
    })
  }

  // ── Cleanup timer on unmount ─────────────────────────────────────────────

  useEffect(() => {
    return () => clearTimeout(copyTimerRef.current)
  }, [])

  // ── Render ───────────────────────────────────────────────────────────────

  const CopyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )

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
        <div className="converter__input-row">
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
          <button
            type="button"
            className={`converter__copy-btn${copiedSide === 'from' ? ' converter__copy-btn--copied' : ''}`}
            onClick={() => handleCopy('from')}
            aria-label={`Copy ${unitList.find((u) => u.id === fromUnit)?.label ?? fromUnit} value`}
            title="Copy to clipboard"
          >
            {copiedSide === 'from' ? 'Copied!' : <CopyIcon />}
          </button>
        </div>
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
        <div className="converter__input-row">
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
          <button
            type="button"
            className={`converter__copy-btn${copiedSide === 'to' ? ' converter__copy-btn--copied' : ''}`}
            onClick={() => handleCopy('to')}
            aria-label={`Copy ${unitList.find((u) => u.id === toUnit)?.label ?? toUnit} value`}
            title="Copy to clipboard"
          >
            {copiedSide === 'to' ? 'Copied!' : <CopyIcon />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Converter
