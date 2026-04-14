import { NavLink, Link } from 'react-router'
import './Nav.css'

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="27"
          viewBox="0 0 48 46"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#863bff"
            d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
          />
        </svg>
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
