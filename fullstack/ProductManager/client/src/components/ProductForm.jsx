import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
    // keep track of what is being type with useState
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

    const submitHandler  = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title} />
            <label>Price</label>
            <input type="text" onChange={e=>setPrice(e.target.value)} value={price} />
            <label>Description</label>
            <textarea type="text" onChange={e=>setDescription(e.target.value)} value={description} />
            <button type="submit">Create Product</button>
        </form>
    )
}

export default ProductForm