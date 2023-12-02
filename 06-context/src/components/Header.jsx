import React from 'react'
import Filters from "./Filters.jsx"

const Header = ({children}) => {
  return (
    <header>
        <h1>REACT SHOPING 🛒</h1>
        {children}
    </header>
  )
}

export default Header