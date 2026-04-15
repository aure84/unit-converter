import { useState, useEffect, useRef } from 'react'
import './Converter.css'
import './CurrencyConverter.css'

const CURRENCIES = [
  { id: 'USD', label: 'US Dollar',         symbol: '$' },
  { id: 'EUR', label: 'Euro',              symbol: '€' },
  { id: 'GBP', label: 'British Pound',     symbol: '£' },
  { id: 'JPY', label: 'Japanese Yen',      symbol: '¥' },
  { id: 'HUF', label: 'Hungarian Forint',  symbol: 'Ft' },
  { id: 'CHF', label: 'Swiss Franc',       symbol: 'CHF' },
  { id: 'CAD', label: 'Canadian Dollar',   symbol: 'CA$' },
  { id: 'AUD', label: 'Australian Dollar', symbol: 'A$' },
  { id: 'CNY', label: 'Chinese Yuan',      symbol: '¥' },
  { id: 'SEK', label: 'Swedish Krona',     symbol: 'kr' },
  { id: 'NOK', label: 'Norwegian Krone',   symbol: 'kr' },
  { id: 'DKK', label: 'Danish Krone',      symbol: 'kr' },
  { id: 'PLN', label: 'Polish Zloty',      symbol: 'zł' },
  { id: 'CZK', label: 'Czech Koruna',      symbol: 'Kč' },
  { id: 'RON', label: 'Romanian Leu',      symbol: 'lei' },
]

const CACHE_KEY = 'cf_currency_rates'
const CACHE_TTL = 24 * 60 * 60 * 1000

function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (Date.now() - data.cachedAt > CACHE_TTL) return null
    return data
  } catch {
    return null
  }
}

function saveCache(rates, date) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ rates, date, cachedAt: Date.now() }))
  } catch {}
}

function convertCurrency(amount, from, to, rates) {
  if (!rates || from === to) return amount
  const inUSD = from === 'USD' ? amount : amount / rates[from]
  return to === 'USD' ? inUSD : inUSD * rates[to]
}

function formatCurrency(value) {
  if (!isFinite(value)) return ''
  return String(parseFloat(value.toPrecision(6)))
}

function CurrencyConverter({ defaultFrom = 'USD', defaultTo = 'EUR', initialValue }) {
  const [fromCurrency, setFromCurrency] = useState(defaultFrom)
  const [toCurrency,   setToCurrency]   = useState(defaultTo)
  const [fromValue,    setFromValue]    = useState(initialValue ?? '')

  const [rates,    setRates]    = useState(null)
  const [rateDate, setRateDate] = useState(null)
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(false)

  const [copiedSide, setCopiedSide] = useState(null)
  const copyTimerRef = useRef(null)

  useEffect(() => {
    const cached = loadCache()
    if (cached) {
      setRates(cached.rates)
      setRateDate(cached.date)
      setLoading(false)
      return
    }

    // Try primary, fall back to secondary endpoint
    const urls = [
      'https://api.frankfurter.app/latest?from=USD',
      'https://api.frankfurter.dev/v1/latest?from=USD',
    ]

    const tryFetch = (index) => {
      if (index >= urls.length) {
        setError(true)
        setLoading(false)
        return
      }
      fetch(urls[index])
        .then((r) => { if (!r.ok) throw new Error(); return r.json() })
        .then((data) => {
          const ratesWithBase = { ...data.rates, USD: 1 }
          setRates(ratesWithBase)
          setRateDate(data.date)
          saveCache(ratesWithBase, data.date)
          setLoading(false)
        })
        .catch(() => tryFetch(index + 1))
    }

    tryFetch(0)

    return () => clearTimeout(copyTimerRef.current)
  }, [])

  const parsedFrom = parseFloat(fromValue)
  const toValue =
    rates && fromValue !== '' && isFinite(parsedFrom)
      ? formatCurrency(convertCurrency(parsedFrom, fromCurrency, toCurrency, rates))
      : ''

  function handleSwap() {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    if (toValue !== '') setFromValue(toValue)
  }

  async function handleCopy(side) {
    const val = side === 'from' ? fromValue : toValue
    const cur = side === 'from' ? fromCurrency : toCurrency
    if (!val) return
    try {
      await navigator.clipboard.writeText(`${val} ${cur}`)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = `${val} ${cur}`
      ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    clearTimeout(copyTimerRef.current)
    setCopiedSide(side)
    copyTimerRef.current = setTimeout(() => setCopiedSide(null), 2000)
  }

  const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )

  return (
    <div className="currency-converter">
      {/* Converter row — reuses .converter layout */}
      <div className="converter">
        <div className="converter__field">
          <label className="converter__label">From</label>
          <select
            className="converter__select"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            aria-label="From currency"
          >
            {CURRENCIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label} ({c.id})</option>
            ))}
          </select>
          <div className="converter__input-row">
            <input
              type="number"
              className="converter__input"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              placeholder="0"
              inputMode="decimal"
              aria-label={`Amount in ${fromCurrency}`}
            />
            <button
              type="button"
              className={`converter__copy-btn${copiedSide === 'from' ? ' converter__copy-btn--copied' : ''}`}
              onClick={() => handleCopy('from')}
              title="Copy to clipboard"
              aria-label="Copy from value"
            >
              {copiedSide === 'from' ? 'Copied!' : <CopyIcon />}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="converter__arrow currency-converter__swap"
          onClick={handleSwap}
          aria-label="Swap currencies"
          title="Swap currencies"
        >
          ⇄
        </button>

        <div className="converter__field">
          <label className="converter__label">To</label>
          <select
            className="converter__select"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            aria-label="To currency"
          >
            {CURRENCIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label} ({c.id})</option>
            ))}
          </select>
          <div className="converter__input-row">
            <input
              type="number"
              className="converter__input"
              value={loading ? '' : toValue}
              placeholder={loading ? 'Fetching rates…' : '0'}
              readOnly
              aria-label={`Amount in ${toCurrency}`}
            />
            <button
              type="button"
              className={`converter__copy-btn${copiedSide === 'to' ? ' converter__copy-btn--copied' : ''}`}
              onClick={() => handleCopy('to')}
              title="Copy to clipboard"
              aria-label="Copy to value"
              disabled={!toValue}
            >
              {copiedSide === 'to' ? 'Copied!' : <CopyIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Status — outside the flex row so it always renders below */}
      {error && (
        <p className="currency-converter__error">
          Exchange rates unavailable. Please try again later.
        </p>
      )}
      {!error && rateDate && (
        <p className="currency-converter__meta">
          Rates from {rateDate} · ECB data via frankfurter.app
        </p>
      )}
    </div>
  )
}

export default CurrencyConverter
