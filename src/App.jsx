import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductById from './pages/ProductById'
import Purchases from './pages/Purchases'
import Cart from './pages/Cart'
import './App.css'
import ProtectedRoute from './components/app/ProtectedRoute'
import Header from './layout/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartProducts } from './store/slices/cart.slice'

function App() {
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.userInfoSlice)
  useEffect(() => {
    if(token){
    dispatch(getAllCartProducts())}
  }, [])

  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/product/:id' element={<ProductById />}></Route>
      <Route element={<ProtectedRoute />}>
        <Route path='/purchases' element={<Purchases />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Route>
    </Routes>
    </div>
  ) 
}

export default App
