import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { productId, onDelete } = props

    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                onDelete()
            })
    }

    return (
        <button onClick={deleteProduct} className='btn btn-danger'>Delete</button>
    )
}

export default DeleteButton