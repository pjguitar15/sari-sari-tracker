import React, { useEffect, useState, useRef } from 'react'
// icons
import BigProductIcon from '../../../../components/icons/BigProductIcon'
// package
import { useFormik } from 'formik'
// custom hooks
import useCloudinary from '../../../../custom-hooks/useCloudinary'
// context
import { useAuth } from '../../../../context/AuthProvider'

const validate = (values) => {
  // initial values
  let errors = {}
  if (!values.productName) {
    errors.productName = 'Required'
  }

  if (!values.category) {
    errors.category = 'Required'
  }
  return errors
}

const EditModal = ({ currentItem, setCurrentItem }) => {
  const [file, setFile] = useState({})
  const [url] = useCloudinary(file)
  const initialValues = {
    productName: '',
    purchasedPrice: 1,
    sellingPrice: 1,
    category: 'can',
    stock: 1,
    img: null,
  }
  // context
  const { addToFirestore, isLoading } = useAuth()
  // ref
  const fileinputref = useRef(null)

  // test
  useEffect(() => {
    console.log('useEffect')
    console.log(currentItem)
    if (currentItem.length !== 0) {
      initialValues.productName = currentItem.productName
      initialValues.purchasedPrice = currentItem.purchasedPrice
      initialValues.sellingPrice = currentItem.sellingPrice
      initialValues.category = currentItem.category
      initialValues.stock = currentItem.stock
      initialValues.img = currentItem.img
      // initialValues.productName = currentItem
    }
  }, [currentItem, initialValues])

  // formik
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
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
          currentItem.length !== 0 ? '' : 'hidden'
        } py-12 bg-gray-700/75 backdrop-brightness-150 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0`}
        id='modal'
      >
        <h1 className='text-5xl font-bold text-center'>{currentItem[0]}</h1>
        <div
          role='alert'
          className='container mx-auto w-11/12 md:w-2/3 max-w-lg'
        >
          <form
            onSubmit={formik.handleSubmit}
            className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'
          >
            <h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-3xl'>
              Edit this item
            </h1>
            {/* image */}
            <label
              htmlFor='name'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Image
            </label>
            <img className='h-36' src={formik.values.img} alt='' />
            <input
              ref={fileinputref}
              onChange={(e) => setFile(e.target.files[0])}
              id='name'
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm rounded'
              placeholder='0'
              type='file'
            />
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
                onClick={() => setCurrentItem([])}
                className='focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
              >
                Cancel
              </button>
            </div>
            <button
              type='button'
              onClick={() => setCurrentItem([])}
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

export default EditModal
