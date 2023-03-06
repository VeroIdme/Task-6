import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

  const {products} = useSelector(state => state.cartSlice)

  return (
    <header className='header'>
        <Link to="/"><h1 className='title-header'>e-commerce</h1></Link >
        <ul className='container-header'>
            <li><Link  to='/login'><i className='bx bx-user'></i></Link ></li>
            <li><Link  to='/purchases'><i className='bx bx-box'></i></Link ></li>
            <li className='li-cart'><Link  to='/cart'><i className='bx bx-cart'></i><h4 className='count'>{products.length}</h4></Link ></li>
        </ul>
    </header>
  )
}

export default Header