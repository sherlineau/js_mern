import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Update = (props) => {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    })

    const updateProduct = e => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/products/' + id, {
            title, price, description
        })
            .then(res => console.log(res))
            .then(err => console.log(err))
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct} className="mx-auto my-3" style={{ width: "500px" }}>
                <label className='form-label'>Title</label>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} required className='form-control' />
                <label className='form-label'>Price</label>
                <input type="text" onChange={e => setPrice(e.target.value)} value={price} required className='form-control' />
                <label className='form-label'>Description</label>
                <textarea type="text" onChange={e => setDescription(e.target.value)} value={description} required className='form-control' />
                <button className='btn btn-success mt-3' type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default Update