import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllCartProducts } from '../store/slices/cart.slice'
import { purchasesCart } from '../store/slices/cart.slice'
const Cart = () => {
  const {products} = useSelector(state => state.cartSlice)
  
  const dispatch = useDispatch()

  const totalPriceCart = products.reduce((total, product) => total + product.quantity * product.product.price, 0)

  useEffect(() => {
    dispatch(getAllCartProducts())
  }, [])
  
  const handlePurchaseCart = () => {
    dispatch(purchasesCart())
  }

  return (
    <main>
      <section className='container-cards'>
        {
          products.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct}/>)
        }
      </section>
      <section className='container-total'>
        <h3>Total: {totalPriceCart}</h3>
        <button onClick={handlePurchaseCart}>Checkout</button>
      </section>
    </main>
  )
}

export default Cart