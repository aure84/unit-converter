import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'

const SITE_URL = 'https://convert-fast.com'

function ContactPage() {
  return (
    <main className="legal-page">
      <SEOMeta
        title="Contact | Convert Fast"
        description="Get in touch with the Convert Fast team. Send feedback, report a conversion error, or suggest a new unit category."
        canonical={`${SITE_URL}/contact`}
      />

      <h1>Contact Us</h1>

      <section>
        <p>
          Have a question, spotted an error, or want to suggest a new converter? We read every message and typically respond within 1–2 business days.
        </p>
      </section>

      <section>
        <h2>Email</h2>
        <p>
          <a href="mailto:contact@convert-fast.com"><strong>contact@convert-fast.com</strong></a>
        </p>
        <p style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>
          We use your email only to reply and don't store it beyond that conversation. See our <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>
        <ul>
          <li><strong>Found a conversion error?</strong> Please include the value, the units, and the expected result.</li>
          <li><strong>Requesting a new unit category?</strong> Tell us what you need — we add new converters regularly.</li>
          <li><strong>Privacy or data questions?</strong> See our <Link to="/privacy">Privacy Policy</Link>.</li>
          <li><strong>Advertising or partnership inquiries?</strong> Use the email above with the subject line "Partnership".</li>
        </ul>
      </section>
    </main>
  )
}

export default ContactPage
