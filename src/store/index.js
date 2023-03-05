import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./slices/products.slice"
import userInfoSlice from "./slices/userInfo.slice"
import cartSlice from "./slices/cart.slice"

export default configureStore({
    reducer:{
        productsSlice,
        userInfoSlice,
        cartSlice 
    }
}
)