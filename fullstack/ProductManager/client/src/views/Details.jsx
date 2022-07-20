import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'

const Details = () => {
  const [product, setProduct] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  // gets the product from database using params 
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => setProduct(res.data))
  })

  return (
    <div>
      {
        // ternary opeartor checks if product exists 
        product ?
          <div>
            <h1>Product Name: {product.name}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <DeleteButton productId={product._id} onDelete={() => navigate('/')} />
          </div>
          :
          <h1>Product not available</h1>
      }
    </div>
  )
}

export default Details