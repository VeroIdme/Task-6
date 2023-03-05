import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PuchaseCard from '../components/Purchases/PuchaseCard'
import { getConfig } from '../utils/configAxios'

const Purchases = () => {
  const [purchases, setPurchases] = useState([])
  useEffect(() => {
    const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data))
      .catch(err => console.log(err))
  })
  return (
    <main>
      <section>
        <section>
          <h3>My purchases</h3>
          <section>
            {
                purchases.map(purchase => (
                  <PuchaseCard key={purchase.id} purchase={purchase} />
                ))
            }
           
          </section>
        </section>
      </section>
    </main>
  )
}

export default Purchases