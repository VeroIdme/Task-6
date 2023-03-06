import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Categories = ({setCategory}) => {
    const [categories, setCategories] = useState([])

    const handleClick = id => {
      setCategory(id)
    }
    useEffect(() => {
      const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
      axios.get(URL)
        .then(res =>setCategories(res.data.data.categories))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <section>
        
        <ul className='container-cat'>
            <li onClick={() => handleClick('')}>All products</li>
            <h4>Categories</h4>
            {
                categories?.map(category => <li onClick={() => handleClick(category.id)} key={category.id}>{category.name}</li>)
            }
        </ul>
    </section>
  )
}

export default Categories