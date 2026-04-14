import SEOMeta from '../components/SEOMeta.jsx'

const SITE_URL = 'https://convert-fast.com'

function HomePage() {
  return (
    <main>
      <SEOMeta
        title="Unit Converter | Convert Fast"
        description="Free online unit converter. Convert length, weight, temperature, volume, area, speed, time, and data storage units instantly."
        canonical={`${SITE_URL}/`}
      />
      <h1>Unit Converter</h1>
      <p>Select a category to get started.</p>
    </main>
  )
}

export default HomePage
