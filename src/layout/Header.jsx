import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <NavLink to="/"><h1>e-commerce</h1></NavLink >
        <ul>
            <li><NavLink  to='/login'><i class='bx bx-user'></i></NavLink ></li>
            <li><NavLink  to='/purchases'><i class='bx bx-box'></i></NavLink ></li>
            <li><NavLink  to='/car'><i class='bx bx-cart'></i></NavLink ></li>
        </ul>
    </header>
  )
}

export default Header