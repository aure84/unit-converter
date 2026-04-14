import { Outlet } from 'react-router'
import Nav from '../components/Nav.jsx'
import { Footer } from '../components/Nav.jsx'

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
