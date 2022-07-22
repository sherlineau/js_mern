import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

// grab id from params and get one jobs from database when component is loaded 
// 1. dbs -> axios
// 2. when component is loaded -> useEffect
// 3. var that will be changed : useState
// 4. need id from params -> useParams

// need a form, after submit -> post to database
// 1. input: states to track changes -> useState
// 2. send info to database-> axios

const EditPage = () => {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(100000)
  const [isRemote, setIsRemote] = useState(true)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(res => {
        const job = res.data
        setTitle(job.title)
        setCompany(job.company)
        setSalary(job.salary)
        setIsRemote(job.isRemote)
      })
      .catch(err => console.log(err))
  }, [id])

  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/jobs/${id}`, { title, company, salary, isRemote })
      .then(res => navigate(`/jobs/${id}`))
      .catch(err => console.log(err))
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
        <button type='submit' className='btn btn-success'>Edit Job</button>
        <button type='button' className='btn btn-danger m-3' onClick={e => navigate('/')}>Cancel</button>
      </form>
    </div>
  )
}

export default EditPage