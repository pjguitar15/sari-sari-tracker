import React, { useContext, useState, useEffect } from 'react'
// fire auth
import { app } from '../firebase/firebaseConfig'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
// import firebase
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

const AuthContext = React.createContext()

export const useFirestore = () => {
  return useContext(AuthContext)
}

export const FirestoreProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [productData, setProductData] = useState([])
  // collection
  const collectionRef = collection(db, 'users')

  // useEffect
  useEffect(() => {
    getProducts()
  }, [])

  // functions
  const getProducts = () => {
    // get current user first
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email)
        // find the user data that matches the current logged user
        setLoading(true)
        const q = query(collectionRef, orderBy('timestamp', 'desc'))
        const getData = async () => {
          const data = await getDocs(q)
          const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          const filteredUsers = users.filter(
            (item) => item.email === user.email
          )
          // console.log(filteredUsers[0].products)
          setProductData(filteredUsers[0].products)
          setLoading(false)
        }
        getData()
      }
    })

    // take the products array and populate it into productData state
  }

  const values = { productData, loading }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default FirestoreProvider
