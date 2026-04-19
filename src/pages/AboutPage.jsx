import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'

const SITE_URL = 'https://convert-fast.com'

function AboutPage() {
  return (
    <main className="legal-page">
      <SEOMeta
        title="About | Convert Fast"
        description="Convert Fast is a free online unit converter built for speed and accuracy. No sign-up required — just instant conversions for length, weight, temperature, and more."
        canonical={`${SITE_URL}/about`}
      />

      <h1>About Convert Fast</h1>

      <section>
        <p>
          Convert Fast is a free online unit converter that handles all the measurements you need — length, weight, temperature, volume, area, speed, time, data storage, and more. Every conversion is instant, accurate, and works in both directions. No account required.
        </p>
      </section>

      <section>
        <h2>Why we built this</h2>
        <p>
          Most unit converter sites are slow, cluttered, or hard to use on mobile. We built Convert Fast to be the opposite: a clean, fast tool that gives you the answer immediately, with clear explanations of the units and formulas involved.
        </p>
      </section>

      <section>
        <h2>Who we are</h2>
        <p>
          Convert Fast is operated by an independent developer based in Hungary. The site is not affiliated with any standards body or commercial entity. Conversion factors are sourced from internationally recognized standards (SI, NIST, and ISO).
        </p>
      </section>

      <section>
        <h2>Get in touch</h2>
        <p>
          Questions, feedback, or found an error in a conversion?{' '}
          Visit our <Link to="/contact">Contact page</Link> or email us at{' '}
          <a href="mailto:contact@convert-fast.com">contact@convert-fast.com</a>.
        </p>
      </section>
    </main>
  )
}

export default AboutPage
