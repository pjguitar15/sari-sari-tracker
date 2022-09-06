import React from 'react'
// icons

const ItemRow = ({ item, setCurrentItem }) => {
  // functions
  const editHandler = (thisItem) => {
    console.log(thisItem)
    setCurrentItem(thisItem)
  }
  return (
    <div className='flex py-1 border-b font-Poppins'>
      <div className='py-1 w-1/12 flex items-center justify-center uppercase'>
        {item.id.slice(0, 8)}
      </div>
      <div className='font-semibold py-1 text-center w-1/12'>
        <img className='h-10 w-auto mx-auto' src={item.img} alt='can' />
      </div>
      <div className='py-1 w-3/12 flex text-center items-center justify-center'>
        {item.productName}
      </div>
      <div className='py-1 w-1/12 flex text-center items-center justify-center uppercase font-semibold'>
        {item.category}
      </div>
      <div className='py-1  flex items-center justify-center w-1/12'>
        {item.stock}
      </div>
      <div className='py-1  flex items-center justify-center w-1/12'>
        ₱{item.purchasedPrice}
      </div>
      <div className='py-1  flex items-center justify-center w-1/12'>
        ₱{item.sellingPrice}
      </div>
      <div className='py-1  flex items-center justify-center w-1/12'>
        {item.stock > 0 ? (
          <div className='text-green-500'>In Stock</div>
        ) : (
          <div className='text-red-500'>Out of Stock</div>
        )}
      </div>
      <div className='py-1 gap-2 flex items-center justify-center w-2/12'>
        <button
          onClick={() => editHandler(item)}
          className='text-sky-500 font-semibold uppercase'
        >
          Edit
        </button>
        <button className='text-red-500 font-semibold uppercase'>DELETE</button>
      </div>
    </div>
  )
}

export default ItemRow
