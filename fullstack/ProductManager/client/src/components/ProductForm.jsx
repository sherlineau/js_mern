import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
    // keep track of what is being type with useState
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
    }
    return (
        <form onSubmit={submitHandler} className="mx-auto my-3" style={{ width: "500px" }}>
            <h1>Create a Product</h1>
            <label className='form-label'>Title</label>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} required className='form-control' />
            <label className='form-label'>Price</label>
            <input type="text" onChange={e => setPrice(e.target.value)} value={price} required className='form-control' />
            <label className='form-label'>Description</label>
            <textarea type="text" onChange={e => setDescription(e.target.value)} value={description} required className='form-control' />
            <button className='btn btn-success mt-3' type="submit">Create Product</button>
        </form>
    )
}

export default ProductForm