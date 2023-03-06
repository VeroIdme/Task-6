import React from 'react'
import {formatDate} from "../../utils/data"

const PuchaseCard = ({purchase}) => {
  return (
    <article className='containerCard purchase-cont'>
        <div>
         <div className='containerCard__img'>
            <img src={purchase.product.images[0].url} alt="product" />
        </div>
            <h4 className='title-purchase'>{purchase.product.title}</h4>
        </div>
        <div>
            <h4 className='titles-puchase'> Date: {formatDate(purchase.createdAt)}</h4>
        <div> 
            <h4 className='titles-puchase'> Quantity: {purchase.quantity}</h4>
        </div> 
            <h4 className='titles-puchase'>Price: $ {purchase.product.price}</h4>
         </div>
     </article>
  )
}

export default PuchaseCard