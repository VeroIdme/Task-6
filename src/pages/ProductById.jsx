import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductbyId/ProductInfo'
import SimilarProduct from '../components/ProductbyId/SimilarProduct'


const ProductById = () => {
  const [product, setProduct] = useState()
  const [categories, setCategories] = useState()
  const {id} = useParams()

  useEffect(() => {
   const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
   axios.get(URL)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
  }, [id])

  useEffect(() => {
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/categories`
    axios.get(URL)
     .then(res => setCategories(res.data))
     .catch(err => console.log(err))
   }, [id])
  
  return (
    <main>
      <ProductInfo product={product}/>
      <SimilarProduct product={product} categories={categories}/>
    </main>
  )
}

export default ProductById