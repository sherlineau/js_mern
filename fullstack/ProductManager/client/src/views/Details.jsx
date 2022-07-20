import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
  const [product, setProduct] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  // gets the product from database using params 
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  })

  //function for delete button -> onclick redirect[navigate] to home
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => navigate('/'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      {
        // ternary opeartor checks if product exists 
        product ?
          <div>
            <h1>Product Name: {product.name}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={handleDelete}>Delete</button>
          </div> 
          : 
          <h1>Product not available</h1>
      }
    </div>
  )
}

export default Details