import React from 'react'
import { SignUpForm } from './SignUpForm'

const SignUp = () => {
  return (
    <div className='flex font-Poppins'>
      {/* left */}
      {/* right */}
      <div className='flex-1 h-screen flex flex-col items-center justify-center'>
        <h1 className='font-semibold text-6xl uppercase'>Sign Up</h1>
        <SignUpForm />
      </div>
      <div className='flex-1 h-screen bg-indigo-900 flex items-center justify-center'>
        <h1 className='font-semibold text-6xl text-white uppercase'>
          Some art here
        </h1>
      </div>
    </div>
  )
}

export default SignUp
