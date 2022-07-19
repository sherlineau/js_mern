import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductTable from '../components/ProductTable'

const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    // get messages on load
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
    }, [])

    // remove from list with filter
    const removeFromList = productId => {
        const filteredList = products.filter((product, i) => {
            return(
                product._id !== productId
            )
        })
        setProducts(filteredList)    }

    // create product
    const createProduct = product => {
        axios.post(`http://localhost:8000/api/products`, product)
            // update props list
            .then(res => setProducts([...products, res.data]))
            .catch()
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialName="" initialPrice={0} initialDescription=""/>
            <hr/>
            <ProductTable products={products} updateList={removeFromList}/>
        </div>
    )
}

export default Main