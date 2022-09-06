import React, { useEffect, useState, useRef } from 'react'
// icons
import BigProductIcon from '../icons/BigProductIcon'
// package
import { useFormik } from 'formik'
// custom hooks
import useCloudinary from '../../custom-hooks/useCloudinary'
// context
import { useAuth } from '../../context/AuthProvider'

// initial values
const initialValues = {
  productName: '',
  purchasedPrice: 1,
  sellingPrice: 1,
  category: 'can',
  stock: 1,
  img: null,
}

const validate = (values) => {
  let errors = {}
  if (!values.productName) {
    errors.productName = 'Required'
  }

  if (!values.category) {
    errors.category = 'Required'
  }
  return errors
}

const DefaultModal = () => {
  const [file, setFile] = useState({})
  const [url] = useCloudinary(file)
  // context
  const {
    addToFirestore,
    isLoading,
    isAddProductModalShow,
    setIsAddProductModalShow,
  } = useAuth()
  // ref
  const fileinputref = useRef(null)

  // formik
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      addToFirestore(
        values.productName,
        values.purchasedPrice,
        values.sellingPrice,
        values.category,
        values.stock,
        url
      )
      resetForm({})
      fileinputref.current.value = null
    },
    validate,
  })

  return (
    <div className='font-Poppins'>
      <div
        className={`${
          isAddProductModalShow ? '' : 'hidden'
        } py-12 bg-gray-700/75 backdrop-brightness-150 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0`}
        id='modal'
      >
        <div
          role='alert'
          className='container mx-auto w-11/12 md:w-2/3 max-w-lg'
        >
          <form
            onSubmit={formik.handleSubmit}
            className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'
          >
            <div className='w-full flex justify-start text-gray-600 mb-3'>
              <BigProductIcon />
            </div>
            <h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>
              Enter Product Details
            </h1>
            {/* Product Name */}
            <label
              htmlFor='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Product Name
            </label>
            <input
              value={formik.values.productName}
              onChange={formik.handleChange}
              name='productName'
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='Argentina Corned Beef'
            />
            {/* Purchase Price */}
            <label
              htmlFor='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Purchased Price
            </label>
            <input
              value={formik.values.purchasedPrice}
              onChange={formik.handleChange}
              name='purchasedPrice'
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='1'
              type='number'
            />
            {/* Selling Price */}
            <label
              htmlFor='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Selling Price
            </label>
            <input
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              name='sellingPrice'
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='1'
              type='number'
            />
            {/* Category */}
            <label
              htmlFor='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Category
            </label>
            <select
              value={formik.values.category}
              onChange={formik.handleChange}
              name='category'
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
            >
              <option value='can'>Can</option>
              <option value='pack'>Pack</option>
              <option value='noodles'>Noodles</option>
              <option value='bottle'>Bottle</option>
            </select>
            {/* Stock */}
            <label
              htmlFor='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Stock
            </label>
            <input
              value={formik.values.stock}
              onChange={formik.handleChange}
              name='stock'
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='0'
              type='number'
            />
            {/* image */}
            <label
              htmlFor='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Image
            </label>
            <input
              ref={fileinputref}
              onChange={(e) => setFile(e.target.files[0])}
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm rounded'
              placeholder='0'
              type='file'
            />
            <div className='flex items-center justify-start w-full'>
              <button
                disabled={isLoading || !url}
                type='submit'
                className='disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out enabled:hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'
              >
                Submit
              </button>
              <button
                type='button'
                onClick={() => setIsAddProductModalShow(false)}
                className='focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
              >
                Cancel
              </button>
            </div>
            <button
              type='button'
              onClick={() => setIsAddProductModalShow(false)}
              className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
              aria-label='close modal'
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default DefaultModal
