import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { productId, removeFromDom } = props;

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom()
            })
            .catch(err => console.error(err))
    }

    return (
        <button className='btn btn-outline-danger' onClick={e => { deleteProduct(e) }}>
            DeleteButton
        </button>
    )
}

export default DeleteButton