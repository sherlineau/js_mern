import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductTable = (props) => {
  // callback to parent
  const removeFromList = productId => {
    props.updateList(productId)
  }

  return (
    <table className='table mx-auto' style={{width:'700px'}}>
      <thead>
        <tr>
          <th>Product Name</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          props.products.map((product, i) => {
            return (
              <tr key={i}>
                <td><Link to={`/products/${product._id}`}><span style={{fontSize: "20px"}}>{product.name}</span></Link></td>
                <td style={{width:"50px"}}><Link to={`/products/${product._id}/edit`} className='btn btn-primary'>Edit</Link></td>
                <td style={{width:"50px"}}><DeleteButton productId={product._id} onDelete={()=>removeFromList(product._id)}/></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ProductTable