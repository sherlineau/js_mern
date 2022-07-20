import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import ProductForm from '../components/ProductForm'

const Update = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false)

    // display on load -> use effect to get one [params -> id from props]
    // this is our "props" that will be sent to product form
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=> {
                // sets our product state to the response.data 
                setProduct(res.data)
                setLoaded(true)
            })
    },[])

    // update product -> product "param" is recieved from ProductForm as an object
    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
        .then(res=>navigate('/'))
    }
    return (
        <>
        {
            loaded && (<ProductForm onSubmitProp={updateProduct} initialName={product.name} initialPrice={product.price} initialDescription={product.description} />)
        }
        </>
    )
}

export default Update