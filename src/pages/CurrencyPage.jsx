import { useLocation } from 'react-router'
import CurrencyConverter from '../components/CurrencyConverter.jsx'
import CategoryContent from '../components/CategoryContent.jsx'
import SEOMeta from '../components/SEOMeta.jsx'

const SITE_URL = 'https://convert-fast.com'

function CurrencyPage() {
  const { search } = useLocation()
  const initialValue = new URLSearchParams(search).get('value') ?? undefined

  return (
    <main>
      <SEOMeta
        title="Currency Converter | Convert Fast"
        description="Free online currency converter with daily exchange rates. Convert USD, EUR, GBP, JPY, HUF and 10+ more currencies instantly."
        canonical={`${SITE_URL}/currency`}
      />
      <h1>Currency Converter</h1>
      <CurrencyConverter
        defaultFrom="USD"
        defaultTo="EUR"
        initialValue={initialValue}
      />
      <CategoryContent category="currency" />
    </main>
  )
}

export default CurrencyPage
