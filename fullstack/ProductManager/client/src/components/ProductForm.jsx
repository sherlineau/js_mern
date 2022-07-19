import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = (props) => {
  // initial values for update/edit
  const { initialName, initialPrice, initialDescription, onSubmitProp } = props
  const [name, setName] = useState(initialName)
  const [price, setPrice] = useState(initialPrice)
  const [description, setDescription] = useState(initialDescription)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitProp({name,price,description})
  }

  return (
    <form onSubmit={handleSubmit} className='mx-auto' style={{width:"700px"}}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>Product Name</label>
        <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} className='form-control'/>
      </div>
      <div className='mb-3'>
        <label htmlFor='price' className='form-label'>Price</label>
        <input type='number' name='price' value={price} onChange={e => setPrice(e.target.value)} className='form-control'/>
      </div>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>Description</label>
        <input type='text' name='description' value={description} onChange={e => setDescription(e.target.value)} className='form-control'/>
      </div>
      <button type='submit' className='btn btn-success'>Submit</button>
    </form>
  )
}

export default ProductForm