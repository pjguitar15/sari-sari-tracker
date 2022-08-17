import React from 'react'

const PrimaryButton = ({ isSubmit, text, isFullWidth }) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${
        isFullWidth ? 'w-full' : ''
      } shadow-sm py-2 px-6 rounded-md transition duration-300 bg-blue-600 text-white hover:bg-indigo-500`}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
