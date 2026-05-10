import SEOMeta from '../components/SEOMeta.jsx'

const SITE_URL = 'https://convert-fast.com'
const CONTACT  = 'contact@convert-fast.com'

function PrivacyPage() {
  return (
    <main className="legal-page">
      <SEOMeta
        title="Privacy Policy | Convert Fast"
        description="Privacy policy for Convert Fast. Learn what data we collect, how we use Google Analytics and Google AdSense, and your GDPR rights."
        canonical={`${SITE_URL}/privacy`}
      />

      <h1>Privacy Policy</h1>
      <p className="legal-page__meta">Last updated: May 10, 2026</p>

      <section>
        <h2>1. Who we are</h2>
        <p>
          Convert Fast (<strong>convert-fast.com</strong>) is a free online unit conversion tool
          operated by <strong>Stromájer László</strong>, an individual based in Hungary. If you
          have any questions about this policy, please contact us at{' '}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </section>

      <section>
        <h2>2. What data we collect</h2>
        <p>
          We do not ask you to create an account and we do not knowingly collect any personally
          identifiable information. However, certain data is collected automatically when you visit
          the site:
        </p>
        <ul>
          <li>
            <strong>Usage data</strong> — pages visited, time spent, referring URL, browser type,
            operating system, and screen resolution. This data is collected in aggregate form by
            Google Analytics 4 and is used solely to understand how visitors use the site.
          </li>
          <li>
            <strong>IP address</strong> — your IP address is transmitted to Google as part of
            Google Analytics and Google AdSense requests. Google may use it to approximate your
            geographic location (country / region level). We do not store your IP address ourselves.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> — Google Analytics and Google AdSense
            set cookies on your device. See our <a href="/cookies">Cookie Policy</a> for the full
            list and opt-out options.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Google Analytics 4</h2>
        <p>
          We use Google Analytics 4 (measurement ID: <code>G-NGFSH2W20K</code>) to collect
          anonymous statistics about how visitors interact with the site. Google Analytics uses
          cookies and may transfer data to Google servers in the United States. Google acts as a
          data processor under our instructions.
        </p>
        <p>
          Google's data processing terms and privacy policy apply to this processing. You can learn
          more at{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>.
        </p>
        <p>
          You can opt out of Google Analytics tracking by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>
      </section>

      <section>
        <h2>4. Google AdSense and advertising</h2>
        <p>
          We display ads served by Google AdSense (publisher ID: <code>ca-pub-6164838820338976</code>).
          Google and its partners may use cookies to serve ads based on your prior visits to this
          site or other sites on the internet. This is sometimes called interest-based or
          personalised advertising.
        </p>
        <p>
          You can opt out of personalised advertising by visiting{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Google Ad Settings
          </a>{' '}
          or the{' '}
          <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
            NAI opt-out page
          </a>. EU/EEA users will be shown a consent prompt before personalised ads are served.
          Our consent mechanism uses Google Consent Mode v2, which defaults all signals to
          denied until you make an explicit choice.
        </p>
      </section>

      <section>
        <h2>5. Legal basis for processing (GDPR)</h2>
        <p>
          If you are located in the European Economic Area, our legal basis for collecting and
          using the data described above is as follows:
        </p>
        <ul>
          <li>
            <strong>Analytics cookies</strong> — your consent, which you can withdraw at any time
            via our <a href="/cookies">Cookie Policy</a> page.
          </li>
          <li>
            <strong>Advertising cookies</strong> — your consent, which you can withdraw at any
            time via the cookie consent banner or Google Ad Settings.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Your rights under GDPR</h2>
        <p>
          If you are based in the EU/EEA, you have the following rights regarding your personal
          data:
        </p>
        <ul>
          <li><strong>Right of access</strong> — you can request a copy of any personal data we hold about you.</li>
          <li><strong>Right to rectification</strong> — you can ask us to correct inaccurate data.</li>
          <li><strong>Right to erasure</strong> — you can ask us to delete your personal data.</li>
          <li><strong>Right to restrict processing</strong> — you can ask us to limit how we use your data.</li>
          <li><strong>Right to data portability</strong> — you can ask for your data in a structured, machine-readable format.</li>
          <li><strong>Right to object</strong> — you can object to processing based on our legitimate interests.</li>
          <li><strong>Right to withdraw consent</strong> — where processing is based on consent, you can withdraw it at any time without affecting the lawfulness of processing before withdrawal.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. We will respond within 30 days.
        </p>
      </section>

      <section>
        <h2>7. Data retention</h2>
        <p>
          We do not store personal data on our own servers. Google Analytics data is retained for
          14 months by default, after which it is automatically deleted. You can request earlier
          deletion by contacting us.
        </p>
      </section>

      <section>
        <h2>8. International data transfers</h2>
        <p>
          Google may transfer and process your data in the United States and other countries.
          These transfers are covered by Google's Standard Contractual Clauses approved by the
          European Commission.
        </p>
      </section>

      <section>
        <h2>9. We do not sell your data</h2>
        <p>
          We do not sell, rent, or trade your personal data to any third party for their own
          marketing purposes.
        </p>
      </section>

      <section>
        <h2>10. Children's privacy</h2>
        <p>
          This site is not directed at children under 13 years of age. We do not knowingly collect
          personal data from children. If you believe a child has provided us personal information,
          please contact us so we can delete it.
        </p>
      </section>

      <section>
        <h2>11. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The "last updated" date at the top of this
          page will reflect any changes. Continued use of the site after changes are posted
          constitutes your acceptance of the revised policy.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>
          For any privacy-related questions or requests, please email us at{' '}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </section>
    </main>
  )
}

export default PrivacyPage
