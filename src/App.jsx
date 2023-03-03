import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductById from './pages/ProductById'
import Purchases from './pages/Purchases'
import Car from './pages/Car'
import './App.css'
import ProtectedRoute from './components/app/ProtectedRoute'
import Header from './layout/Header'

function App() {

  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/product/:id' element={<ProductById />}></Route>
      <Route element={<ProtectedRoute />}>
        <Route path='/purchases' element={<Purchases />}></Route>
        <Route path='/car' element={<Car />}></Route>
      </Route>
    </Routes>
    </div>
  )
}

export default App
