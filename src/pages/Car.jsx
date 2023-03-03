import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllCartProducts } from '../store/slices/cart.slice'

const Car = () => {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCartProducts)
  }, [third])
  
  return (
    <main>
      <section>
        {
          cart.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct}/>)
        }
      </section>
    </main>
  )
}

export default Car