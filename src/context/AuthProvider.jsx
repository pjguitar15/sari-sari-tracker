import React, { useContext, useState } from 'react'
// packages
import { v4 as uuidv4 } from 'uuid'
// firebase
import { app } from '../firebase/firebaseConfig'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
// firestore
import { db } from '../firebase/firebaseConfig'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore'
// react router dom
import { useNavigate } from 'react-router-dom'
const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isAddProductModalShow, setIsAddProductModalShow] = useState(false)
  const navigate = useNavigate()
  // firestore collection ref
  const collectionRef = collection(db, 'users')
  //   Get current logged in user function
  const getUser = () => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('email', user.email)
        // Get user data from firestore
        const q = query(collectionRef)
        const getData = async () => {
          const data = await getDocs(q).catch((err) => alert(err))
          const populateData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          // filter
          const filtered = populateData.filter(
            (item) => item.email === user.email
          )
          // set local storage. ISSUE: Doesn't update the previous item unless you refresh
          localStorage.setItem('firstName', filtered[0].firstName)
          localStorage.setItem('businessName', filtered[0].businessName)
        }
        getData()
      }
    })
  }
  //   Sign up function
  const signup = (
    emailInput,
    passwordInput,
    firstName,
    middleName,
    lastName,
    username,
    businessName
  ) => {
    setIsLoading(true)
    const authentication = getAuth(app)
    createUserWithEmailAndPassword(authentication, emailInput, passwordInput)
      .then((response) => {
        alert('Account created successfully!')
        navigate('/login')
        // firestore add user function here
        const addItem = async () => {
          await addDoc(collectionRef, {
            firstName,
            middleName,
            lastName,
            username,
            email: emailInput,
            businessName,
            products: [],
            timestamp: serverTimestamp(),
          })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
        addItem()
        // add current user to state
        setIsLoading(false)
      })
      .catch((err) => {
        const errorCode = err.code
        const errorMessage = err.message
        alert(errorMessage)
        setIsLoading(false)
      })
  }
  // login
  const login = (email, password) => {
    setIsLoading(true)
    const authentication = getAuth(app)
    signInWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        alert('Login Success!')
        navigate('/')
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        // add current user to state
        getUser()
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.message)
        setIsLoading(false)
      })
  }

  // FIRESTORE
  const addToFirestore = async (
    productName,
    purchasedPrice,
    sellingPrice,
    category,
    stock,
    img
  ) => {
    setIsLoading(true)
    const productRef = collection(db, 'users')

    // get current user auth email
    getAuth().onAuthStateChanged((user) => {
      console.log(user)
      // now get the id from fire store
      const q = query(productRef, orderBy('timestamp', 'desc'))
      const getData = async () => {
        const data = await getDocs(q)
        const allData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const filterData = allData.filter((item) => item.email === user.email)
        // current user id
        const currentUserFirestoreId = filterData[0].id
        // get all products
        const currentProductArray = filterData[0].products
        // products to be appended
        const newProduct = {
          id: uuidv4().slice(0, 8),
          productName,
          purchasedPrice,
          sellingPrice,
          category,
          stock,
          img,
        }
        // Push new object to array
        currentProductArray.push(newProduct)
        console.log(currentProductArray)
        // console.log('New Array Test: ' + currentProductArray)

        // Update Collection Function
        const updateItem = async () => {
          const userDoc = doc(db, 'users', currentUserFirestoreId)
          const newFields = {
            products: currentProductArray,
            test: '123',
          }
          await updateDoc(userDoc, newFields)

          setIsLoading(false)
          setIsAddProductModalShow(false)
          alert(productName + ' was successfully added!')
          window.location.reload()
        }
        updateItem()
      }
      getData()
    })

    // await addDoc(productRef, {
    //   products: {
    //     productName,
    //     purchasedPrice,
    //     sellingPrice,
    //     category,
    //     stock,
    //     img,
    //     timestamp: serverTimestamp(),
    //   },
    // }).then((res) => {
    //   console.log(res)
    //   setIsLoading(false)
    //   setIsAddProductModalShow(false)
    //   alert('Product added successfully!')
    //
    // })
  }

  const value = {
    signup,
    login,
    isLoading,
    addToFirestore,
    isAddProductModalShow,
    setIsAddProductModalShow,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
