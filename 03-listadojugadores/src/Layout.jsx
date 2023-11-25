import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
        </nav>
        <Outlet/>
    </main>
  )
}

export default Layout