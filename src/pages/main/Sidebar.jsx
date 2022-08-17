import React from 'react'
// packages
import { useNavigate } from 'react-router-dom'
// icons
import HomeOutline from '../../components/icons/HomeOutline'
import ProductOutline from '../../components/icons/ProductOutline'
import SalesOutline from '../../components/icons/SalesOutline'
import AccountOutline from '../../components/icons/AccountOutline'
import LogoutOutline from '../../components/icons/LogoutOutline'

const Sidebar = ({ selectedLink, setSelectedLink }) => {
  const navigate = useNavigate()
  const logoutHandler = () => {
    sessionStorage.removeItem('Auth Token')
    navigate('/login')
  }

  const linkClickHandler = (link) => {
    setSelectedLink(link)
  }
  return (
    <div className='font-Poppins h-screen bg-indigo-50 w-3/12'>
      <div className='bg-indigo-800 flex flex-col items-center justify-center py-10'>
        <h1 className='text-5xl text-white'>Admin</h1>
        <h1 className='text-lg text-slate-200'>Owner</h1>
      </div>

      {/* Links */}
      <ul>
        <li
          onClick={() => linkClickHandler('home')}
          className={`${
            selectedLink === 'home' ? 'bg-indigo-400 text-white' : ''
          } cursor-pointer hover:bg-indigo-400 duration-200 hover:text-white py-4 flex gap-2 px-12`}
        >
          <HomeOutline />
          Home
        </li>
        <li
          onClick={() => linkClickHandler('product')}
          className={`${
            selectedLink === 'product' ? 'bg-indigo-400 text-white' : ''
          } cursor-pointer hover:bg-indigo-400 duration-200 hover:text-white py-4 flex gap-2 px-12`}
        >
          <ProductOutline />
          Product
        </li>
        <li
          onClick={() => linkClickHandler('sales')}
          className={`${
            selectedLink === 'sales' ? 'bg-indigo-400 text-white' : ''
          } cursor-pointer hover:bg-indigo-400 duration-200 hover:text-white py-4 flex gap-2 px-12`}
        >
          <SalesOutline />
          Sales
        </li>
        <li
          onClick={() => linkClickHandler('account')}
          className={`${
            selectedLink === 'account' ? 'bg-indigo-400 text-white' : ''
          } cursor-pointer hover:bg-indigo-400 duration-200 hover:text-white py-4 flex gap-2 px-12`}
        >
          <AccountOutline />
          Account
        </li>
        <li
          onClick={logoutHandler}
          className='cursor-pointer hover:bg-indigo-400 duration-200 hover:text-white py-4 flex gap-2 px-12'
        >
          <LogoutOutline />
          Logout
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
