import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterButton = () => {
  const navigate = useNavigate()
  return (
    <div className='text-center mt-5 select-none'>
      Don't have an account?{' '}
      <span
        onClick={() => navigate('/register')}
        className='font-semibold text-indigo-500 hover:text-indigo-600 cursor-pointer'
      >
        Create an account
      </span>
    </div>
  )
}

export default RegisterButton
