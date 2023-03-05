import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
  const {token} = useSelector(store => store.userInfoSlice)

  if(token){
  return <Outlet />  
  } else{
    return <Navigate to='/login' />
  }

  
}

export default ProtectedRoute