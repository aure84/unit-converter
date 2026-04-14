import SEOMeta from '../components/SEOMeta.jsx'

const SITE_URL = 'https://convert-fast.com'
const CONTACT  = 'contact@convert-fast.com'

function TermsPage() {
  return (
    <main className="legal-page">
      <SEOMeta
        title="Terms of Service | Convert Fast"
        description="Terms of service for Convert Fast. Free online unit converter — no warranty on accuracy, fair-use rules, and intellectual property information."
        canonical={`${SITE_URL}/terms`}
      />

      <h1>Terms of Service</h1>
      <p className="legal-page__meta">Last updated: April 14, 2026</p>

      <section>
        <h2>1. Acceptance of terms</h2>
        <p>
          By accessing or using Convert Fast at <strong>convert-fast.com</strong> ("the Site"),
          you agree to be bound by these Terms of Service. If you do not agree, please stop using
          the Site.
        </p>
      </section>

      <section>
        <h2>2. Description of the service</h2>
        <p>
          Convert Fast provides a free online unit conversion tool covering length, weight,
          temperature, volume, area, speed, time, and data storage. The service is provided
          as-is, at no charge, with no registration required.
        </p>
      </section>

      <section>
        <h2>3. No warranty on accuracy</h2>
        <p>
          While we strive to provide correct conversion results, the Site is provided{' '}
          <strong>"as is"</strong> and <strong>"as available"</strong> without any warranty of
          any kind, express or implied, including but not limited to warranties of accuracy,
          merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          Conversion results should not be relied upon for safety-critical, medical, legal,
          financial, or engineering applications without independent verification. Always
          cross-check results when precision matters.
        </p>
      </section>

      <section>
        <h2>4. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by applicable law, the operator of Convert Fast shall
          not be liable for any direct, indirect, incidental, special, consequential, or
          exemplary damages arising from your use of, or inability to use, the Site or its
          results — even if advised of the possibility of such damages.
        </p>
        <p>
          This includes, without limitation, any errors or omissions in conversion results,
          loss of data, or any other losses arising from reliance on information provided by
          the Site.
        </p>
      </section>

      <section>
        <h2>5. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Scrape, crawl, or systematically harvest content or data from the Site using
            automated tools without prior written permission.
          </li>
          <li>
            Use the Site in any way that places an unreasonable or disproportionately large
            load on our infrastructure.
          </li>
          <li>
            Attempt to gain unauthorised access to any part of the Site or its related systems.
          </li>
          <li>
            Use the Site to distribute malware, spam, or any other harmful content.
          </li>
          <li>
            Misrepresent the source of conversion results or pass them off as your own
            proprietary calculations for commercial gain.
          </li>
          <li>
            Reproduce or republish substantial portions of the Site's content without
            attribution and written permission.
          </li>
        </ul>
        <p>
          We reserve the right to block access to the Site for any user or IP address that
          violates these rules, at our sole discretion.
        </p>
      </section>

      <section>
        <h2>6. Intellectual property</h2>
        <p>
          The design, layout, source code, and content of the Site are owned by or licensed to
          the operator of Convert Fast and are protected by applicable copyright and intellectual
          property laws.
        </p>
        <p>
          The underlying unit conversion formulas and factors used on the Site are based on
          publicly available scientific and standards-body definitions (SI, NIST, etc.) and are
          not claimed as proprietary. You are free to use individual conversion results for
          personal, educational, or non-commercial purposes.
        </p>
        <p>
          "Convert Fast" and the Site's branding are unregistered trademarks of the operator.
          You may not use them without prior written consent.
        </p>
      </section>

      <section>
        <h2>7. Third-party services</h2>
        <p>
          The Site uses Google Analytics and Google AdSense. Your use of these services is also
          governed by Google's Terms of Service and Privacy Policy. We are not responsible for
          the practices of these third parties.
        </p>
        <p>
          The Site may contain links to external websites. We have no control over the content
          of those sites and accept no responsibility for them.
        </p>
      </section>

      <section>
        <h2>8. Availability</h2>
        <p>
          We make no guarantee that the Site will be available at all times or free from errors.
          We may modify, suspend, or discontinue the Site at any time without notice.
        </p>
      </section>

      <section>
        <h2>9. Governing law</h2>
        <p>
          These Terms are governed by the laws of Hungary. Any disputes arising under or in
          connection with these Terms shall be subject to the exclusive jurisdiction of the
          courts of Hungary, without prejudice to your rights as a consumer under the law of
          your country of residence.
        </p>
      </section>

      <section>
        <h2>10. Changes to these terms</h2>
        <p>
          We may update these Terms at any time. The "last updated" date at the top of this page
          will be revised accordingly. Continued use of the Site after changes are posted means
          you accept the updated Terms.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          Questions about these Terms? Email us at{' '}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </section>
    </main>
  )
}

export default TermsPage
