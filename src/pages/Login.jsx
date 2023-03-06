import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk, logoutThunk } from '../store/slices/userInfo.slice'

const Login = () => {
  const {token, user} = useSelector(state => state.userInfoSlice)

  const{register, handleSubmit, reset} = useForm()

  const dispatch = useDispatch()

  const submit = data => {
    dispatch(loginUserThunk(data))
    reset({
      email: '',
      password: ''
    })
  }

  const handleClickLogout = () => {
    dispatch(logoutThunk())
  }
  return (
    <main className='container-login'>
      {
        token? (
          <section className='container-logout'>
            <i className='bx bx-user-circle'></i>
            <h3 className='name-user'>{`${user.firstName} ${user.lastName}`}</h3>
            <button className='btn-log log' onClick={handleClickLogout}>Logout</button>
          </section>
        ): (
          <form onSubmit={handleSubmit(submit)}>
        <h3>Welcome! Enter your email and password to continue</h3>
        <div className='test-data'>
          <h4>Test data</h4>
          <p><i className='bx bx-envelope'></i> john@gmail.com</p>
          <p><i className='bx bx-lock-alt'></i> john1234</p>
        </div>
        <div className='container-data'>
          <label>Email</label>
          <input type="email" {...register('email')} />
        </div>
        <div className='container-data'>
          <label > Password</label>
          <input type="password" {...register('password')} />
        </div>
        <button className='btn-log log'>Login</button>
        <p>Don't have an account? <span>Sign up</span></p>
      </form>
        )
      }
    </main>
  )
}

export default Login