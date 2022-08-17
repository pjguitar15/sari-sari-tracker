import React from 'react'
import { LoginForm } from './LoginForm'

const Login = () => {
  return (
    <div className='flex font-Poppins'>
      {/* left */}
      {/* right */}
      <div className='flex-1 h-screen flex flex-col items-center justify-center'>
        <h1 className='font-semibold text-6xl uppercase'>Login</h1>
        <LoginForm />
      </div>
      <div className='flex-1 h-screen bg-indigo-900 flex items-center justify-center'>
        <h1 className='font-semibold text-6xl text-white uppercase'>
          Some art here
        </h1>
      </div>
    </div>
  )
}

export default Login
