import { NavLink, Link } from 'react-router'
import './Nav.css'

const LOGO_URL = '/favicon.svg'

const CATEGORIES = [
  { path: '/length',       label: 'Length' },
  { path: '/weight',       label: 'Weight' },
  { path: '/temperature',  label: 'Temperature' },
  { path: '/volume',       label: 'Volume' },
  { path: '/area',         label: 'Area' },
  { path: '/speed',        label: 'Speed' },
  { path: '/time',         label: 'Time' },
  { path: '/data-storage', label: 'Data Storage' },
]

const LEGAL_LINKS = [
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms',   label: 'Terms of Service' },
  { path: '/cookies', label: 'Cookie Policy' },
]

function Nav() {
  return (
    <nav className="nav" aria-label="Unit categories">
      <Link to="/" className="nav__logo" aria-label="Convert Fast home">
        <img src={LOGO_URL} alt="Convert Fast" width="24" height="24" />
      </Link>
      <ul className="nav__list">
        {CATEGORIES.map(({ path, label }) => (
          <li key={path} className="nav__item">
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <ul className="site-footer__list">
        {LEGAL_LINKS.map(({ path, label }) => (
          <li key={path} className="site-footer__item">
            <Link to={path} className="site-footer__link">{label}</Link>
          </li>
        ))}
      </ul>
      <p className="site-footer__copy">
        &copy; {new Date().getFullYear()} Convert Fast &mdash; convert-fast.com
      </p>
    </footer>
  )
}

export default Nav
