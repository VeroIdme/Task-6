import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import Categories from '../components/Home/Categories'
import {getProductsGlobal} from '../store/slices/products.slice'

const Home = () => {
  const [nameProduct, setNameProduct] = useState('')
  const [category, setCategory] = useState('')
  const [filterProducts, setFilterProducts] = useState([])
  const products = useSelector(state => state.productsSlice)

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const newName = e.target.name.value
    setNameProduct(newName)
  }

  useEffect(() => {
    dispatch(getProductsGlobal())
  }, [])

  useEffect(() => {
    setFilterProducts(products)
  }, [products])
  console.log(products)
  useEffect(() => {
    const newProducts = products.filter(product => product.title.include(nameProduct) && (product.category.id === category || category === ''))
    setFilterProducts(newProducts)
  }, [nameProduct, category])
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <input type="text" name='name' placeholder='What are you looking for?' />
        <button><i class='bx bx-search'></i></button>
        </div>
      </form>  
      <Categories setCategory={setCategory}/>
    
      {
        filterProducts.map(product => (
          <CardProduct product={product} key={product.id}/>
        ))
      }
    </div>
  )
}

export default Home