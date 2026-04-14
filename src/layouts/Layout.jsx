import { Outlet } from 'react-router'
import Nav from '../components/Nav.jsx'

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default Layout
