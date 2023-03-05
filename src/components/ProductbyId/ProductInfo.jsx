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
    <article>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <div>
                <h3>Price</h3>
                <span>{product?.price}</span>
            </div>
            <div>
                <h3>Quantity</h3>
                <div onClick={handleMinus}>-</div>
                <div>{quantity}</div>
                <div onClick={handlePlus}>+</div>
            </div>
            <button onClick={handleClickAddProduct}>Add to cart <i class='bx bx-cart-add'></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo