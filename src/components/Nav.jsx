import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import './Nav.css'

const CATEGORIES = [
  { path: '/length',        label: 'Length' },
  { path: '/weight',        label: 'Weight' },
  { path: '/temperature',   label: 'Temperature' },
  { path: '/volume',        label: 'Volume' },
  { path: '/area',          label: 'Area' },
  { path: '/speed',         label: 'Speed' },
  { path: '/time',          label: 'Time' },
  { path: '/data-storage',  label: 'Data Storage' },
  { path: '/pressure',      label: 'Pressure' },
  { path: '/energy',        label: 'Energy' },
  { path: '/power',         label: 'Power' },
  { path: '/fuel-economy',  label: 'Fuel Economy' },
  { path: '/cooking',       label: 'Cooking' },
  { path: '/angle',         label: 'Angle' },
  { path: '/frequency',     label: 'Frequency' },
  { path: '/shoe-size',     label: 'Shoe Size' },
  { path: '/torque',        label: 'Torque' },
  { path: '/currency',      label: 'Currency', special: true },
]

const LEGAL_LINKS = [
  { path: '/blog',    label: 'Guides' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms',   label: 'Terms of Service' },
  { path: '/cookies', label: 'Cookie Policy' },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on navigation
  const close = () => setIsOpen(false)

  return (
    <nav className={`nav${isOpen ? ' nav--open' : ''}`} aria-label="Unit categories">
      <Link to="/" className="nav__logo" aria-label="Convert Fast home" onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="nav-c" x1="58" y1="4" x2="10" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="nav-a" x1="22" y1="32" x2="50" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#ede9fe" />
            </linearGradient>
          </defs>
          {/* Speed lines */}
          <line x1="1" y1="25" x2="13" y2="25" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
          <line x1="4" y1="32" x2="13" y2="32" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="1" y1="39" x2="13" y2="39" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
          {/* C arc */}
          <path d="M 57 18 A 22 22 0 1 0 57 46" stroke="url(#nav-c)" strokeWidth="7" strokeLinecap="round" fill="none" />
          {/* Back chevron */}
          <path d="M 22 22 L 36 32 L 22 42 L 26 42 L 40 32 L 26 22 Z" fill="url(#nav-a)" opacity="0.65" />
          {/* Front chevron */}
          <path d="M 31 22 L 45 32 L 31 42 L 35 42 L 49 32 L 35 22 Z" fill="url(#nav-a)" />
        </svg>
      </Link>
      <ul className="nav__list">
        {CATEGORIES.map(({ path, label, special }) => (
          <li key={path} className="nav__item">
            <NavLink
              to={path}
              onClick={close}
              className={({ isActive }) => {
                let cls = 'nav__link'
                if (special) cls += ' nav__link--currency'
                if (isActive) cls += ' nav__link--active'
                return cls
              }}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="nav__hamburger"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="nav__hamburger-icon" aria-hidden="true">
          {isOpen ? '✕' : '☰'}
        </span>
      </button>
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
