import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const {products} = useSelector(state => state.cartSlice)

  return (
    <header>
        <NavLink to="/"><h1>e-commerce</h1></NavLink >
        <ul>
            <li><NavLink  to='/login'><i className='bx bx-user'></i></NavLink ></li>
            <li><NavLink  to='/purchases'><i className='bx bx-box'></i></NavLink ></li>
            <li><NavLink  to='/cart'><i className='bx bx-cart'></i>{products.length}</NavLink ></li>
        </ul>
    </header>
  )
}

export default Header