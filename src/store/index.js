import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./slices/products.slice"
import userInfoSlice from "./slices/userInfo.slice"

export default configureStore({
    reducer:{
        productsSlice,
        userInfoSlice
    }
}
)