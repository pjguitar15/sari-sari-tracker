import React from 'react'

const SecondaryButton = ({ isSubmit, text, isFullWidth, onClickFunction }) => {
  return (
    <button
      onClick={onClickFunction ? onClickFunction : ''}
      type={isSubmit ? 'submit' : 'button'}
      className={`${
        isFullWidth ? 'w-full' : ''
      } shadow-sm bg-white text-black py-2 px-6 rounded-md transition duration-300 hover:bg-slate-200`}
    >
      {text}
    </button>
  )
}

export default SecondaryButton
