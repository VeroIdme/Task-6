import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductCar } from '../../store/slices/cart.slice'

const CardProduct = ({product}) => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleClickStop = e => {
        e.stopPropagation()
        const data = {
            quantity: 1,
            productId: product.id
        }
        dispatch(addProductCar(data))
    }

  return (
    <article className='containerCard' onClick={handleClick}>
        <header className='containerCard__img'>
            <img src={`${product.images[0].url}`} alt="image" />
        </header>
        <h3 className='containerCard__title'>{product.title}</h3>
        <p className='containerCard__price'>Price<span>{product.price}</span></p>
        <button className='containerCard__btn' onClick={handleClickStop}>
            <i className='bx bxs-cart'></i>
        </button>
    </article>
  )
}

export default CardProduct