import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// grab all jobs from database when component is loaded 
// 1. dbs -> axios
// 2. when component is loaded -> useEffect
// 3. var that will be changed : useState

const Dashboard = () => {
  // initialize variable for jobs
  const [jobs, setJobs] = useState([])

  // load info when component is loaded
  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobs`)
      .then(res => setJobs(res.data))
      .catch(err => setJobs([]))

  }, [])

  const handleDelete = (deleteID) => {
    axios.delete(`http://localhost:8000/api/jobs/${deleteID}`)
      .then(res => setJobs(jobs.filter(eachJob => eachJob._id !== deleteID)))
      .catch(err => console.log(err))

  }

  return (
    <div>
      <Link to='/jobs/new'>Create new job</Link>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Remote?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            jobs.map((eachJob, i) => {
              return (
                <tr key={i}>
                  <td><Link to={`/jobs/${eachJob._id}`}>{eachJob.title}</Link></td>
                  <td>{eachJob.company}</td>
                  <td>{eachJob.salary}</td>
                  <td>{eachJob.isRemote ? "Yes" : "No"}</td>
                  <td>
                    <Link to={`/jobs/edit/${eachJob._id}`} className="btn btn-primary">Edit</Link>
                    <button className='btn btn-danger' onClick={(e) => handleDelete(eachJob._id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard