import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCar, updateProductCar } from '../../store/slices/cart.slice'
import CardProduct from '../Home/CardProduct'

const CartProduct = ({cartProduct}) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteProductCar(cartProduct.id))
  }
  const handlePlus = () => {
    const newQuantity = cartProduct.quantity + 1
    const data = {
      quantity: newQuantity
    }
    dispatch(updateProductCar(cartProduct.id, data))
  }

  const handleLess = () => {
    const newQuantity = cartProduct.quantity - 1
    if(newQuantity <= 0){
      dispatch(deleteProductCar(cartProduct.id))
    } else{
      const data = {
        quantity: newQuantity
      }
      dispatch(updateProductCar(cartProduct.id, data))
    }
  }

  return (
    <article>
      <div>
        <img src={cartProduct.product.images[0].url} alt="" />
      </div>
      <section>
        <h3>{cartProduct.product.title}</h3>
        <div>
          <button onClick={handleLess}>-</button>
          <h3>{cartProduct.quantity}</h3>
          <button onClick={handlePlus}>+</button>
        </div>
      </section>
        <footer>
            <i onClick={handleDelete} className='bx bx-trash'></i>
            <h3><span>Total</span>${cartProduct.quantity * cartProduct.product.price}</h3>
        </footer>
    </article>
  )
}

export default CartProduct