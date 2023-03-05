import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const defaultValue = {
    token: "",
    user: {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        createdAt: '',
        updatedAt: ''
    }
}

const userInfoSlice = createSlice({
    name: "userInfo", 
    initialState: JSON.parse(localStorage.getItem("userInfo")) ?? defaultValue,
    reducers:{
        setUserInfoGlobal: (state, action) => action.payload
    }
})

export const {setUserInfoGlobal} = userInfoSlice.actions

export default userInfoSlice.reducer

export const loginUserThunk = data => dispatch => {
    const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
    axios.post(URL, data)
        .then(res => {
            dispatch(setUserInfoGlobal(res.data))
            localStorage.setItem('userInfo', JSON.stringify(res.data))
        })
        .catch(err => console.log(err))
}

export const logoutThunk = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch(setUserInfoGlobal(defaultValue))
}