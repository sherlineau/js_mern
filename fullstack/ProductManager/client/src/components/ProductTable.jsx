import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductTable = (props) => {
  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8000/api/products/${deleteId}`)
      .then(res=>props.updateList(deleteId))
      .catch(err=>console.log(err))
  }

  return (
    <table className='table mx-auto' style={{width:'700px'}}>
      <thead>
        <tr>
          <th>Product Name</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          props.products.map((product, i) => {
            return (
              <tr key={i}>
                <td><Link to={`/products/${product._id}`}><span style={{fontSize: "20px"}}>{product.name}</span></Link></td>
                <td style={{width:"50px"}}><Link to={`/products/${product._id}/edit`} className='btn btn-primary'>Edit</Link></td>
                <td style={{width:"50px"}}><button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ProductTable