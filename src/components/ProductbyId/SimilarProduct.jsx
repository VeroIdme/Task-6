import axios from 'axios'
import React, {useEffect, useState} from 'react'
import CardProduct from '../Home/CardProduct'

const SimilarProduct = ({product, categories}) => {
    if(product && categories){
    const [productsByCategory, setProductsByCategory] = useState([])
    const category = categories.filter(category => category.name === product.category.name)
    
    useEffect(() => {
       const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${category[0].id}`
       axios.get(URL)
        .then(res => {
            const productsFiltered = res.data.filter(productByCategory => productByCategory.id !== product.id) 
            setProductsByCategory(productsFiltered)
        })
        .catch(err => console.log(err))
    }, [product, categories])

  return (
    <section className='container-cards'>
       {
        productsByCategory?.map(productByCategory => <CardProduct product={productByCategory } key={productByCategory.id}/>)
       }
    </section>
  )
    }
}

export default SimilarProduct