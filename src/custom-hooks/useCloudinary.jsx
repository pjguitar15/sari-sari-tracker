import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useCloudinary = (file) => {
  const [url, setUrl] = useState(null)
  useEffect(() => {
    if (file.name) {
      const formData = new FormData()
      formData.append('file', file) // selectedImage is a state
      formData.append('upload_preset', 'mqoqh1bj')

      const cloudName = 'philcob'
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        )
        .then((res) => setUrl(res.data.url)) // res.data.url takes the image url
    } 
  }, [file])
  return [url]
}

export default useCloudinary
