import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProduct = ({product}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleClickStop = e => {
        e.stopPropagation()
    }

  return (
    <article className='containerCard' onClick={handleClick}>
        <header className='containerCard__img'>
            <img src={`${product.images[0].url}`} alt="image" />
        </header>
        <h3 className='containerCard__title'>{product.title}</h3>
        <p className='containerCard__price'>Price<span>{product.price}</span></p>
        <button className='containerCard__btn' onClick={handleClickStop}>
            <i class='bx bxs-cart'></i>
        </button>
    </article>
  )
}

export default CardProduct