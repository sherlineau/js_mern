import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductTable from '../components/ProductTable'

// Main component -> view  

const Main = () => {
    // keeps track of all products -> an array of objects
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])

    // get products on load
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    // for delete-> updates product table by filtering list to everything BUT the deleted product ID
    const removeFromList = productId => {
        const filteredList = products.filter((product, i) => {
            return (
                product._id !== productId
            )
        })
        setProducts(filteredList)
    }

    // for create -> updates product table by making a copy of previous array and adding the res.data of post
    // product is passed through form as an object
    const createProduct = product => {
        axios.post(`http://localhost:8000/api/products`, product)
            // update props list
            .then(res => setProducts([...products, res.data]))
            .catch(err => {
                // temp variable to store all our messages
                const errorMessages = {}
                const errorResponse = err.response.data.errors
                for (const key in errorResponse) {
                    errorMessages[key] = errorResponse[key].message
                }
                setErrors(errorMessages);
                console.log(errorMessages);
                })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialName="" initialPrice={0} initialDescription="" errors={errors} />
            <hr />
            <ProductTable products={products} updateList={removeFromList} />
        </div>
    )
}

export default Main