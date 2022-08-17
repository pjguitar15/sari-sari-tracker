import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterButton = () => {
  const navigate = useNavigate()
  return (
    <div className='text-center mt-5 select-none'>
      Already have an account.{' '}
      <span
        onClick={() => navigate('/login')}
        className='font-semibold text-indigo-500 hover:text-indigo-600 cursor-pointer'
      >
        Login
      </span>
    </div>
  )
}

export default RegisterButton
