import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// need a form, after submit -> post to database
// 1. input: states to track changes -> useState
// 2. send info to database-> axios


const CreatePage = () => {
  // need a state for each input 
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(100000)
  const [isRemote, setIsRemote] = useState(true)
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  // function for handling submit
  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/jobs`, { title, company, salary, isRemote })
      .then(res => navigate('/'))
      .catch(err => {
        const errResponse = err.response.data.errors
        const tempErrArr = []
        for (const eachKey in errResponse) {
          tempErrArr.push(errResponse[eachKey].message)
        }
        setErrors(tempErrArr)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label className='form-label'> Title </label>
          <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' />
        </div>

        <div>
          <label className='form-label'> Company </label>
          <input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)} className='form-control' />
        </div>

        <div>
          <label className='form-label'> Salary </label>
          <input type='number' name='salary' value={salary} onChange={(e) => setSalary(e.target.value)} className='form-control' />
        </div>

        <div className='form-check'>
          <input type='checkbox' name='isRemote' checked={isRemote} onChange={(e) => setIsRemote(e.target.checked)} className='form-check-input' />
          <label className='form-check-label'> Remote? </label>
        </div>
        <button type='submit' className='btn btn-success'>Create Job</button>
        <button type='button' className='btn btn-danger m-3' onClick={e => navigate('/')}>Cancel</button>
      </form>
      {
        errors.map((err, i) => <p style={{ color: "red" }} key={i}>{err}</p>)
      }
    </div>
  )
}

export default CreatePage