import React, {useState} from 'react'

const ProductInfo = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const handleMinus = () => {
        const newNumber = quantity - 1
        if(newNumber >= 1) setQuantity(newNumber)
    }

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

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
            <button>Add to cart <i class='bx bx-cart-add'></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo