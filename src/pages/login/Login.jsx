import React, { useState, useEffect } from 'react'
import { LoginForm } from './LoginForm'
// assets
import tindahan from '../../assets/tindahan.png'
import whitebg from '../../assets/white-bg.jpg'

const Login = () => {
  const [isStartBounce, setIsStartBounce] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsStartBounce(true)
    }, 300)
  }, [])
  return (
    <div className='flex font-Poppins'>
      {/* left */}
      <div
        style={{
          backgroundImage: `url(${whitebg})`,
        }}
        className='flex-1 bg-center bg-cover h-screen flex flex-col items-center justify-center'
      >
        <div className='bg-white absolute w-full h-full opacity-70'></div>
        <h1 className='font-semibold text-6xl uppercase z-50'>Login</h1>
        <LoginForm />
      </div>
      {/* right */}
      <div
        style={{
          backgroundImage: `url(${tindahan})`,
        }}
        className={`flex-1 shadow-md border-l-4 border-yellow-400 h-screen flex items-center justify-center bg-center bg-cover relative`}
      >
        <div className='bg-indigo-900/75 h-full w-full absolute flex justify-center items-center px-12'>
          <div className='text-center'>
            <h1 className='text-7xl font-semibold text-white animate-bounce'>
              Sari-Sari
            </h1>
            <h1
              className={`text-7xl font-semibold text-white ${
                isStartBounce ? 'animate-bounce' : ''
              }`}
            >
              Tracker
            </h1>
            <p className='text-gray-300 text-xl font-Poppins font-light w-5/6 mt-3 mx-auto leading-9 animate-pulse'>
              A website application that tracks your product inventory, check
              your monthly sales, manage your business easier using charts to
              track your progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
