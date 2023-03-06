import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addProductCar } from '../../store/slices/cart.slice'

const ProductInfo = ({product, id}) => {
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()

    const handleMinus = () => {
        const newNumber = quantity - 1
        if(newNumber >= 1) setQuantity(newNumber)
    }

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
   
    const handleClickAddProduct = () => {
        const data = {
            quantity,
            productId: product.id
        }
        dispatch(addProductCar(data))
    }
    useEffect(() => {
        setQuantity(1)
    }, [id])
  return (
    <article className='container-info'>
        <div className='container-info-img'>
            <img src={`${product?.images[0].url}`} alt="" />
        </div>
        <h2 className='title-info'>{product?.title}</h2>
        <p className='description-info'>{product?.description}</p>
        <footer className='info-footer'>
            <div className='info-price'>
                <h3>Price</h3>
                <span>{product?.price}</span>
            </div>
            <div className='info-price'>
                <h3>Quantity</h3>
                <div className='cont-btn'>
                   <div className='btn-price' onClick={handleMinus}>-</div>
                   <div className='btn-price'>{quantity}</div>
                   <div className='btn-price' onClick={handlePlus}>+</div> 
                </div>
                <button className='btn-info' onClick={handleClickAddProduct}>Add to cart <i class='bx bx-cart-add'></i></button>
            </div>
        </footer>
    </article>
  )
}

export default ProductInfo