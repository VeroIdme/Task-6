import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getConfig } from "../../utils/configAxios";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartGlobal: (state, action) => {
            return {...state, products: action.payload}
        }
    }
})

export const {setCartGlobal} = cartSlice.actions

export const getAllCartProducts = () => dispatch => {
    
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    axios.get(URL, getConfig())
        .then(res => dispatch(setCartGlobal((res.data))))
        .catch(err => console.log(err))
}

export const addProductCar = (data) => dispatch => {
    
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    axios.post(URL, data,  getConfig())
        .then(res => dispatch(getAllCartProducts()))
        .catch(err => console.log(err))
}

export const deleteProductCar = (id) => dispatch => {
    
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
    axios.delete(URL, getConfig())
        .then(res => dispatch(getAllCartProducts()))
        .catch(err => console.log(err))
}

export const updateProductCar = (id, data) => dispatch => {
    
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
    axios.put(URL, data, getConfig())
        .then(res => dispatch(getAllCartProducts()))
        .catch(err => console.log(err))
}

export const purchasesCart = () => dispatch => {
    
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(URL, {},  getConfig())
        .then(res => dispatch(setCartGlobal([])))
        .catch(err => console.log(err))
}
export default cartSlice.reducer