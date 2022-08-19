import React, { useState } from 'react'
import RoundedInput from '../../../../components/inputFields/RoundedInput'
import CompleteProductList from './CompleteProductList'
// icon
import PlusOutline from '../../../../components/icons/PlusOutline'
import DefaultModal from '../../../../components/modals/DefaultModal'
// context
import { useAuth } from '../../../../context/AuthProvider'

const ProductPage = () => {
  const [searchInput, setSearchInput] = useState('')
  const { setIsAddProductModalShow } = useAuth()
  return (
    <>
      <div className='h-screen p-12 w-9/12 font-Poppins'>
        <DefaultModal />
        <div className='flex justify-between'>
          <div className='text-2xl mb-3 ml-3'>Seach a Product</div>
          <button
            onClick={() => setIsAddProductModalShow(true)}
            className='bg-orange-500 hover:bg-orange-400 duration-200 text-white text-lg px-4 rounded-sm mb-3 ml-3 flex items-center gap-2'
          >
            <PlusOutline /> Add a Product
          </button>
        </div>
        <RoundedInput
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <hr className='my-8' />
        {/* <ProductsList searchInput={searchInput} /> */}
        <CompleteProductList searchInput={searchInput} />
      </div>
    </>
  )
}

export default ProductPage
