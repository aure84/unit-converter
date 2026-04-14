import { Link } from 'react-router'
import SEOMeta from '../components/SEOMeta.jsx'

function NotFoundPage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <SEOMeta
        title="Page Not Found | Convert Fast"
        description="The page you are looking for does not exist."
        canonical="https://convert-fast.com/404"
      />
      <h1>404 — Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: 'var(--accent)' }}>← Back to Home</Link>
    </main>
  )
}

export default NotFoundPage
