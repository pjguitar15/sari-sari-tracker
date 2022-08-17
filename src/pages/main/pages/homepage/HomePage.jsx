import React, { useState } from 'react'
import RoundedInput from '../../../../components/inputFields/RoundedInput'
import ProductsList from './ProductsList'

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('')
  return (
    <div className='h-screen p-12 w-9/12 font-Poppins'>
      <div className='text-2xl mb-3 ml-3'>Seach a Product</div>
      <RoundedInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <hr className='my-8' />
      <ProductsList searchInput={searchInput} />
    </div>
  )
}

export default HomePage
