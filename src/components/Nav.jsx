import { NavLink } from 'react-router'
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

function Nav() {
  return (
    <nav className="nav" aria-label="Unit categories">
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

export default Nav
