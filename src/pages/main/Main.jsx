import React, { useEffect, useState } from 'react'
// packages
import { useNavigate } from 'react-router-dom'
// components
import Sidebar from './Sidebar'
// pages
import HomePage from './pages/homepage/HomePage'
import ProductPage from './pages/productPage/ProductPage'
import SalesPage from './pages/SalesPage'
import AccountPage from './pages/AccountPage'

const Main = () => {
  const [selectedLink, setSelectedLink] = useState('home')
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className='flex'>
      <Sidebar selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
      {selectedLink === 'home' ? <HomePage /> : ''}
      {selectedLink === 'product' ? <ProductPage /> : ''}
      {selectedLink === 'sales' ? <SalesPage /> : ''}
      {selectedLink === 'account' ? <AccountPage /> : ''}
    </div>
  )
}

export default Main
