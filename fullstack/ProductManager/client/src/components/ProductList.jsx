import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

const ProductList = (props) => {
    return (
        <ul className='list-group mx-auto' style={{width: "500px"}}>
            {props.product.map((product, i) =>
                <Link to={product._id} key={i}>
                    <li className='list-group-item list-group-item-action'>{product.title}</li>
                </Link>
            )}
        </ul>
    )
}

export default ProductList