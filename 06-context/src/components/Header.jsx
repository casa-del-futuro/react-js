import React from 'react'
import Filters from "./Filters.jsx"

const Header = ({setFilters}) => {
  return (
    <header>
        <h1>REACT SHOPING 🛒</h1>
        <Filters setFilters={setFilters} />
    </header>
  )
}

export default Header