import React, { useState, useEffect } from 'react'
import ItemRow from './ItemRow'
// assets
import can from '../../../../assets/can.png'
// data
import Products from '../../../../data/Products.json'
import ChevronLeft from '../../../../components/icons/ChevronLeft'
import ChevronRight from '../../../../components/icons/ChevronRight'
// context
import { useFirestore } from '../../../../context/FirestoreProvider'
const CompleteProductList = ({ searchInput }) => {
  // context
  const { productData, loading } = useFirestore()
  // pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(productData.length / itemsPerPage)
  return (
    <div className=''>
      <div className='text-2xl mb-3'>Products List</div>
      <div>
        {/* header */}
        <div className='flex'>
          <div className='font-semibold py-1 text-center w-1/12'>Item Code</div>
          <div className='font-semibold py-1 text-center w-1/12'>Image</div>
          <div className='font-semibold py-1 w-3/12 text-center'>Name</div>
          <div className='font-semibold py-1 w-1/12 text-center'>Category</div>
          <div className='font-semibold py-1 text-center w-1/12'>Stock</div>
          <div className='font-semibold py-1 text-center w-1/12'>Purchased</div>
          <div className='font-semibold py-1 text-center w-1/12'>Selling</div>
          <div className='font-semibold py-1 text-center w-1/12'>Status</div>
          <div className='font-semibold py-1 text-center w-2/12'></div>
        </div>
        {/* Item list */}
        <div className='py-4'>
          {loading ? (
            <h1 className='text-center text-6xl text-gray-300 font-semibold my-12'>
              LOADING...
            </h1>
          ) : productData.length > 0 ? (
            currentItems
              .filter(
                (item) =>
                  item.productName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                  item.category
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
              )
              .map((item, index) => <ItemRow key={index} item={item} />)
          ) : (
            <div className='text-7xl font-medium text-gray-300 text-center my-12'>
              Product List Empty!
            </div>
          )}
        </div>
        {/* Pagination Buttons */}
        <div className='text-center flex justify-center mt-4'>
          <button
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ChevronLeft />
          </button>
          <h4 className='font-semibold text-lg mx-3'>
            {currentPage} of {totalPages}
          </h4>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompleteProductList
