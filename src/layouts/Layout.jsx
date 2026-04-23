import { Outlet } from 'react-router'
import Nav from '../components/Nav.jsx'
import { Footer } from '../components/Nav.jsx'
import CookieBanner from '../components/CookieBanner.jsx'

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <CookieBanner />
    </>
  )
}

export default Layout
