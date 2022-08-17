import React from 'react'

const RoundedInput = ({ searchInput, setSearchInput }) => {
  return (
    <div>
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        className='rounded-full w-full pl-6'
        placeholder='Search by product name'
        type='text'
      />
    </div>
  )
}

export default RoundedInput
