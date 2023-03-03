import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const {setProductsGlobal} = productsSlice.actions
export default productsSlice.reducer 

export  const getProductsGlobal = () => (dispatch) => {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    axios.get(URL)
     .then(res => dispatch(setProductsGlobal(res.data)))
     .catch(err => console.log(err))
}