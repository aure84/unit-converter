import SEOMeta from '../components/SEOMeta.jsx'

const SITE_URL = 'https://convert-fast.com'
const CONTACT  = 'contact@convert-fast.com'

function CookiePage() {
  return (
    <main className="legal-page">
      <SEOMeta
        title="Cookie Policy | Convert Fast"
        description="Cookie policy for Convert Fast. Learn which cookies we use (Google Analytics, Google AdSense) and how to control or opt out of them."
        canonical={`${SITE_URL}/cookies`}
      />

      <h1>Cookie Policy</h1>
      <p className="legal-page__meta">Last updated: April 14, 2026</p>

      <section>
        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They are
          widely used to make websites work, to remember your preferences, and to provide
          information to the site owners. Most browsers accept cookies by default, but you can
          change your settings to refuse them.
        </p>
      </section>

      <section>
        <h2>2. How we use cookies</h2>
        <p>
          Convert Fast does not use any first-party cookies of our own. All cookies on this site
          are set by third-party services we use — specifically Google Analytics and Google
          AdSense. We do not use cookies to collect personally identifiable information directly.
        </p>
      </section>

      <section>
        <h2>3. Analytics cookies — Google Analytics 4</h2>
        <p>
          We use Google Analytics 4 (measurement ID: <code>G-NGFSH2W20K</code>) to understand
          how visitors use the site. Google Analytics sets the following cookies:
        </p>
        <div className="legal-page__table-wrap">
          <table className="legal-page__table">
            <thead>
              <tr>
                <th>Cookie name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>_ga</code></td>
                <td>Distinguishes unique users by assigning a randomly generated number as a client identifier.</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td><code>_ga_XXXXXXXX</code></td>
                <td>Stores and updates a unique value for each page visited (session state).</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td><code>_gid</code></td>
                <td>Distinguishes users — used to throttle request rate.</td>
                <td>24 hours</td>
              </tr>
              <tr>
                <td><code>_gat</code></td>
                <td>Throttles request rate to Google Analytics servers.</td>
                <td>1 minute</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The data collected is used in aggregate to improve the site. Google acts as a data
          processor under our instructions. You can learn more about how Google uses Analytics
          data at{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>.
        </p>
      </section>

      <section>
        <h2>4. Advertising cookies — Google AdSense / DoubleClick</h2>
        <p>
          We display ads through Google AdSense (publisher ID: <code>ca-pub-6164838820338976</code>).
          Google and its advertising partners use cookies to serve ads that may be relevant to
          your interests based on your browsing history. These cookies are set by Google's
          advertising infrastructure, including DoubleClick/Google Ad Manager domains.
        </p>
        <div className="legal-page__table-wrap">
          <table className="legal-page__table">
            <thead>
              <tr>
                <th>Cookie name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>IDE</code></td>
                <td>
                  Used by Google DoubleClick to register and report a user's actions after
                  viewing or clicking an ad, for purposes of measuring the efficacy of an ad
                  and to present targeted ads.
                </td>
                <td>1 year</td>
              </tr>
              <tr>
                <td><code>test_cookie</code></td>
                <td>Used to check if the user's browser supports cookies.</td>
                <td>Session</td>
              </tr>
              <tr>
                <td><code>DSID</code></td>
                <td>Used to identify a signed-in user on non-Google sites for ad personalisation.</td>
                <td>2 weeks</td>
              </tr>
              <tr>
                <td><code>NID</code></td>
                <td>
                  Stores user preferences and other information, such as preferred language,
                  for Google services.
                </td>
                <td>6 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For a full list of Google advertising cookies, see{' '}
          <a
            href="https://business.safety.google/adscookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google's advertising cookie list
          </a>.
        </p>
      </section>

      <section>
        <h2>5. Cookie consent (EU/EEA visitors)</h2>
        <p>
          If you are visiting from the European Union, European Economic Area, or another
          jurisdiction that requires consent for non-essential cookies, a consent banner will
          be displayed on your first visit. Analytics and advertising cookies will only be
          activated after you have given your consent.
        </p>
        <p>
          You may change or withdraw your consent at any time by clearing cookies in your
          browser and revisiting the site to see the consent prompt again.
        </p>
      </section>

      <section>
        <h2>6. How to opt out</h2>
        <p>You have several ways to control or disable cookies:</p>
        <ul>
          <li>
            <strong>Google Analytics opt-out:</strong> Install the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>{' '}
            to prevent your data being used by Google Analytics across all websites.
          </li>
          <li>
            <strong>Google Ad personalisation opt-out:</strong> Visit{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              Google Ad Settings
            </a>{' '}
            to turn off personalised ads from Google across the web.
          </li>
          <li>
            <strong>Industry opt-out tools:</strong> Use the{' '}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NAI opt-out tool
            </a>{' '}
            or the{' '}
            <a
              href="https://optout.aboutads.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DAA opt-out tool
            </a>{' '}
            to opt out of interest-based advertising from participating companies.
          </li>
          <li>
            <strong>Browser settings:</strong> Most browsers allow you to refuse or delete
            cookies. The method varies by browser — check your browser's help documentation.
            Note that disabling cookies may affect the functionality of some websites.
          </li>
          <li>
            <strong>Do Not Track:</strong> Some browsers send a "Do Not Track" signal. We
            pass this signal to Google, but Google's response to DNT signals is governed by
            their own policies.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Changes to this policy</h2>
        <p>
          We may update this Cookie Policy as our use of cookies changes or as required by law.
          The "last updated" date at the top of this page will reflect any revisions.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          Questions about cookies? Email us at{' '}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. For privacy-related requests, see our{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>
    </main>
  )
}

export default CookiePage
