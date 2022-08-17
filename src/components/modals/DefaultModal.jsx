import React from 'react'
// icons
import BigProductIcon from '../icons/BigProductIcon'
// package
import { useFormik } from 'formik'

// initial values
const initialValues = {
  productName: '',
  purchasedPrice: null,
  sellingPrice: null,
  category: '',
  stock: null,
  img: null,
}

const DefaultModal = ({ showModal, setShowModal }) => {
  const formik = useFormik({ initialValues })
  return (
    <div className='font-Poppins'>
      <div
        className={`${
          showModal ? '' : 'hidden'
        } py-12 bg-gray-700/75 backdrop-brightness-150 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0`}
        id='modal'
      >
        <div
          role='alert'
          className='container mx-auto w-11/12 md:w-2/3 max-w-lg'
        >
          <div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
            <div className='w-full flex justify-start text-gray-600 mb-3'>
              <BigProductIcon />
            </div>
            <h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>
              Enter Product Details
            </h1>
            {/* Product Name */}
            <label
              for='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Product Name
            </label>
            <input
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='Argentina Corned Beef'
            />
            {/* Purchase Price */}
            <label
              for='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Purchased Price
            </label>
            <input
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='12'
              type='number'
            />
            {/* Selling Price */}
            <label
              for='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Selling Price
            </label>
            <input
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='24'
              type='number'
            />
            {/* Category */}
            <label
              for='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Category
            </label>
            <select
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
            >
              <option value='1'>Can</option>
              <option value='1'>Pack</option>
              <option value='1'>Noodles</option>
            </select>
            {/* Stock */}
            <label
              for='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Stock
            </label>
            <input
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='0'
              type='number'
            />
            {/* image */}
            <label
              for='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Image
            </label>
            <input
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm rounded'
              placeholder='0'
              type='file'
            />
            <div className='flex items-center justify-start w-full'>
              <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'>
                Submit
              </button>
              <button
                onClick={() => setShowModal(false)}
                className='focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
              >
                Cancel
              </button>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
              ariaLabel='close modal'
              role='button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-x'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                strokeWidth='2.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultModal
