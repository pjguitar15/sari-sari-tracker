import React from 'react'

const PrimaryButton = ({ isSubmit, text, isFullWidth, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={isSubmit ? 'submit' : 'button'}
      className={`${
        isFullWidth ? 'w-full' : ''
      } disabled:opacity-40 disabled:cursor-not-allowed shadow-sm py-2 px-6 rounded-md transition duration-300 bg-blue-600 text-white enabled:hover:bg-indigo-500`}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
