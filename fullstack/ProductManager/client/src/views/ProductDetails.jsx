import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams , Link, useNavigate} from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'

const ProductDetails = (props) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    })

    return (
        <div>
            <h1>Title: {product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"} className='btn btn-outline-primary mx-3'>
                Edit
            </Link>
            <DeleteButton productId={product._id} removeFromDom={() => navigate('../')}/>
        </div>
    )
}

export default ProductDetails