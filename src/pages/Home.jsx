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
    const newName = e.target.nameProduct.value
    setNameProduct(newName)
  }
  
  useEffect(() => {
    dispatch(getProductsGlobal())
  }, [])

  useEffect(() => {
    setFilterProducts(products)
  }, [products])
 
  useEffect(() => {
    const newProducts = products.filter(product => product.title.toLowerCase().includes(nameProduct) &&
    (product.category.id == category || !category))
    setFilterProducts(newProducts)
    
    console.log(newProducts)
  }, [nameProduct, category])
  
  return (
    <div>
      <form className='form-search' onSubmit={handleSubmit}>
        <div className='container-form'>
        <input type="text" name='nameProduct' placeholder='What are you looking for?' />
        <button className='btn-log'><i className='bx bx-search'></i></button>
        </div>
      </form>  
      <Categories setCategory={setCategory}/>
      <section className='container-cards'>
      {
        filterProducts.map(product => (
          <CardProduct product={product} key={product.id}/>
        ))
      }
      </section>
    </div>
  )
}

export default Home