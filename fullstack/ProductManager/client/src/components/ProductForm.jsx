import React, { useState } from 'react'

const ProductForm = (props) => {
  // initial values recieved from parent
  // for create in Main.jsx -> { "" , 0, ""}
  // for update -> grabs product from database by param -> gets name, price, description -> prepoluates form with those values
  // recieves an object of errors for unsuccessful post
  const { initialName, initialPrice, initialDescription, onSubmitProp, errors } = props
  const [name, setName] = useState(initialName)
  const [price, setPrice] = useState(initialPrice)
  const [description, setDescription] = useState(initialDescription)

  // handles submit logic -> grabs values from the form and sends it to the parent as an object -> parent has logic to post/put to database
  // onSubmitProp is my callback function
  // sets state back to initialName -> if its from main it sets to empty
  const handleSubmit = e => {
    e.preventDefault()
    onSubmitProp({ name, price, description })
    setName(initialName)
    setPrice(initialPrice)
    setDescription(initialDescription)
  }

  return (
    <form onSubmit={handleSubmit} className='mx-auto' style={{ width: "700px" }}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>Product Name</label>
        <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} className='form-control' />
        {/* checks if name key exists in errors object -> if it does displays message */}
        {
          errors["name"] ? <p style={{ color: 'red' }} className="mt-3">{errors["name"]}</p> : ""
        }
      </div>
      <div className='mb-3'>
        <label htmlFor='price' className='form-label'>Price</label>
        <input type='number' name='price' value={price} onChange={e => setPrice(e.target.value)} className='form-control' />
        {/* checks if price key exists in errors object -> if it does displays message */}

        {
          errors["price"] ? <p style={{ color: 'red' }} className="mt-3">{errors["price"]}</p> : ""
        }
      </div>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>Description</label>
        <input type='text' name='description' value={description} onChange={e => setDescription(e.target.value)} className='form-control' />
        {/* checks if description key exists in errors object -> if it does displays message */}

        {
          errors["description"] ? <p style={{ color: 'red' }} className="mt-3">{errors["description"]}</p> : ""
        }
      </div>
      <button type='submit' className='btn btn-success'>Submit</button>
      {/* {
        errors.map((err,i)=>{
          return(
            <p style={{color:'red'}} key={i} className="mt-3">{err}</p>
          )
        })
      } */}
    </form>

  )
}

export default ProductForm