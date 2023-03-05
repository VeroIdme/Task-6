import React from 'react'
import {formatDate} from "../../utils/data"

const PuchaseCard = ({purchase}) => {
  return (
    <article>
        <div>
         <div>
            <img src={purchase.product.images[0].url} alt="product" />
        </div>
            <h4>{purchase.product.title}</h4>
        </div>
        <div>
            <h4>{formatDate(purchase.createdAt)}</h4>
        <div>
            <h4>{purchase.quantity}</h4>
        </div>
            <h4>$ {purchase.product.price}</h4>
         </div>
     </article>
  )
}

export default PuchaseCard