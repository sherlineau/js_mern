import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

// grab id from params and get one jobs from database when component is loaded 
// 1. dbs -> axios
// 2. when component is loaded -> useEffect
// 3. var that will be changed : useState
// 4. need id from params -> useParams

const DetailPage = () => {
  const [job, setJob] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.log(err))
  }, [id])

  const handleDelete = () => {
    // delete from dbs
    // redirect
    axios.delete(`http://localhost:8000/api/jobs/${id}`)
      .then( res => navigate('/'))
  }

  return (
    <div>
      {
        job?
        <div>
          <h5>Title: {job.title}</h5>
          <h5>Company: {job.company}</h5>
          <h5>Salary: {job.salary}</h5>
          <h5>{job.isRemote && "Remote Job"}</h5>
          <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
        </div>
        :
        <h1>Wrong id</h1>
      }
    </div>
  )
}

export default DetailPage