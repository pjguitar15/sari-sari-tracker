import React, { useState, useEffect } from 'react'
// components
import PrimaryButton from '../../components/buttons/PrimaryButton'
import RegisterButton from './RegisterButton'
import RedAlert from '../../components/alerts/RedAlert'
// packages
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  username: '',
  password: '',
}

const testCredentials = { username: 'pjguitar15', password: 'adminadmin' }

const validate = (values) => {
  let errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

export const LoginForm = () => {
  const [showLoginError, setShowLoginError] = useState(false)
  const navigate = useNavigate()
  const onSubmit = (values) => {
    if (
      testCredentials.username === values.username &&
      testCredentials.password === values.password
    ) {
      const randomToken = 'asd123'
      sessionStorage.setItem('Auth Token', randomToken)
      navigate('/')
      setShowLoginError(false)
    } else {
      setShowLoginError(true)
    }
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [navigate])
  return (
    <form
      onSubmit={formik.handleSubmit}
      className='bg-gray-50 border border-gray-300 shadow-sm p-8 lg:w-9/12 mt-5'
    >
      <div className='my-2'>
        {/* username */}
        <input
          onChange={formik.handleChange}
          value={formik.values.username}
          name='username'
          className='w-full'
          placeholder='Enter username'
          type='text'
        />
        {/* formik error */}
        {formik.errors.username ? (
          <div className='text-sm text-red-500'>{formik.errors.username}</div>
        ) : (
          ''
        )}
      </div>
      <div className='my-2'>
        {/* password */}
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          name='password'
          className='w-full'
          placeholder='Enter password'
          type='password'
        />
        {/* formik error */}
        {formik.errors.password ? (
          <div className='text-sm text-red-500'>{formik.errors.password}</div>
        ) : (
          ''
        )}
      </div>
      <div className='my-2'>
        {/* Button */}
        <PrimaryButton text='Login' isSubmit={true} isFullWidth={true} />
        {showLoginError ? (
          <div className='mt-3'>
            <RedAlert
              highlightedText={'Error! '}
              text='Invalid username/password.'
              setShowLoginError={setShowLoginError}
            />
          </div>
        ) : (
          ''
        )}
      </div>
      {/* Register */}
      <RegisterButton />
    </form>
  )
}
