import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductList = (props) => {
    const { removeFromDom } = props

    return (
        <div className='mx-auto' style={{ width: "500px" }}>

            <table className='table'>
                {props.product.map((product, i) =>
                    <tr key={i}>
                        <td>
                            <Link to={'/products/'+ product._id}> {product.title} </Link>
                        </td>
                        <td>
                            <DeleteButton productId={product._id} removeFromDom={() => removeFromDom(product._id)}/>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default ProductList