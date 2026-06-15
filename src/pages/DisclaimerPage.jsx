import SEOMeta from '../components/SEOMeta.jsx'

const SITE_URL = 'https://convert-fast.com'

function DisclaimerPage() {
  return (
    <main className="legal-page">
      <SEOMeta
        title="Disclaimer | Convert Fast"
        description="Disclaimer for Convert Fast. Conversion results and currency rates are provided for general information only and without warranty of accuracy."
        canonical={`${SITE_URL}/disclaimer`}
      />

      <h1>Disclaimer</h1>
      <p className="legal-page__meta">Last updated: 2026-06-06</p>

      <section>
        <h2>1. Information only</h2>
        <p>
          Convert Fast (<strong>convert-fast.com</strong>) provides unit conversion tools and
          reference content for general informational purposes only. While we work to keep our
          conversion factors and formulas accurate, results are provided <strong>"as is"</strong>{' '}
          without warranty of any kind, express or implied, including accuracy, completeness, or
          fitness for a particular purpose.
        </p>
      </section>

      <section>
        <h2>2. Verify before critical use</h2>
        <p>
          Do not rely on conversions from this site where an error could cause harm or loss —
          including medical dosing, medication, engineering, construction, aviation, navigation,
          legal, financial, or scientific applications. Always confirm critical values with a
          qualified professional or an authoritative primary source before acting on them.
        </p>
      </section>

      <section>
        <h2>3. Currency exchange rates</h2>
        <p>
          Exchange rates shown by the currency converter are supplied by third-party data providers
          (European Central Bank reference rates via frankfurter.app) and are cached in your browser
          for up to 24 hours. Rates are indicative only, may be delayed, and will differ from the
          rates offered by banks, card networks, or money-transfer services. They are{' '}
          <strong>not</strong> intended for trading, accounting, or any transactional purpose. We do
          not guarantee the availability, timeliness, or accuracy of this third-party data.
        </p>
      </section>

      <section>
        <h2>4. No liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Convert Fast and its operator accept no
          liability for any loss or damage arising from use of, or reliance on, any conversion
          result, rate, or content on this site. See our <a href="/terms">Terms of Service</a> for
          the full limitation of liability.
        </p>
      </section>
    </main>
  )
}

export default DisclaimerPage
