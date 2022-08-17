import React from 'react'
// icons
import PlusOutline from '../../../../components/icons/PlusOutline'

const ItemRow = ({ item }) => {
  return (
    <div className='flex py-1 border-b font-Poppins'>
      <div className='font-semibold py-1 text-center w-2/12'>
        <img className='h-10 w-auto mx-auto' src={item.img} alt='can' />
      </div>
      <div className='py-1 w-5/12 flex items-center justify-center'>
        {item.name}
      </div>
      <div className='py-1  flex items-center justify-center w-2/12'>
        {item.available}
      </div>
      <div className='py-1  flex items-center justify-center w-2/12'>
        ₱{item.price}
      </div>
      <div className='py-1  flex items-center justify-center w-1/12'>
        <button className='shadow-sm py-2 px-6 transition duration-300 bg-orange-500 text-white hover:bg-orange-400 rounded-full text-center'>
          <PlusOutline />
        </button>
      </div>
    </div>
  )
}

export default ItemRow
