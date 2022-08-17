import React from 'react'
// packages
import { useFormik } from 'formik'
// components
import PrimaryButton from '../../components/buttons/PrimaryButton'
import RegisterButton from './RegisterButton'

const initialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
}
const validate = (values) => {
  let errors = {}

  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.middleName) {
    errors.middleName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  }

  if (values.confirmPassword !== values.password) {
    errors.passwordDontMatch = 'Passwords do not match!'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  return errors
}

const onSubmit = (values) => {
  console.log(values)
}
export const SignUpForm = () => {
  const formik = useFormik({ initialValues, onSubmit, validate })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='bg-slate-50 border border-gray-300 shadow-sm p-8 lg:w-9/12 mt-5'
    >
      {/* First, Middle, Last Name */}
      <div className='my-2'>
        <div className='text-sm mb-2'>First Name</div>
        <input
          onChange={formik.handleChange}
          value={formik.values.firstName}
          name='firstName'
          className='w-full'
          placeholder='Enter First Name'
          type='text'
        />
        {/* formik error */}
        {formik.errors.firstName ? (
          <div className='text-sm text-red-500'>{formik.errors.firstName}</div>
        ) : (
          ''
        )}
      </div>
      <div className='my-2'>
        <div className='text-sm mb-2'>Middle Name</div>
        <input
          onChange={formik.handleChange}
          value={formik.values.middleName}
          name='middleName'
          className='w-full'
          placeholder='Enter Middle Name'
          type='text'
        />
        {/* formik error */}
        {formik.errors.middleName ? (
          <div className='text-sm text-red-500'>{formik.errors.middleName}</div>
        ) : (
          ''
        )}
      </div>
      <div className='my-2'>
        <div className='text-sm mb-2'>Last Name</div>
        <input
          onChange={formik.handleChange}
          value={formik.values.lastName}
          name='lastName'
          className='w-full'
          placeholder='Enter Last Name'
          type='text'
        />
        {/* formik error */}
        {formik.errors.lastName ? (
          <div className='text-sm text-red-500'>{formik.errors.lastName}</div>
        ) : (
          ''
        )}
      </div>
      <div className='my-2'>
        <div className='text-sm mb-2'>Email</div>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          name='email'
          className='w-full'
          placeholder='Enter your email'
          type='email'
        />
        {/* formik error */}
        {formik.errors.email ? (
          <div className='text-sm text-red-500'>{formik.errors.email}</div>
        ) : (
          ''
        )}
      </div>
      <div className='my-2'>
        <div className='text-sm mb-2'>Username</div>
        {/* username */}
        <input
          onChange={formik.handleChange}
          value={formik.values.username}
          name='username'
          className='w-full'
          placeholder='Enter your desired username'
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
        <div className='text-sm mb-2'>Password</div>
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
        <div className='text-sm mb-2'>Confirm Password</div>
        {/* password */}
        <input
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          name='confirmPassword'
          // 102595
          className='w-full'
          placeholder='Confirm password'
          type='password'
        />
        {/* formik error */}
        {/* formik error */}
        {formik.errors.confirmPassword ? (
          <div className='text-sm text-red-500'>
            {formik.errors.confirmPassword}
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='text-sm text-red-500'>
        {formik.errors.passwordDontMatch}
      </div>
      <div className='my-4'>
        {/* Button */}
        <PrimaryButton text='Sign Up' isSubmit={true} isFullWidth={true} />
      </div>
      {/* Register */}
      <RegisterButton />
    </form>
  )
}
