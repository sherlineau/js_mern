import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // keeps track of authors from database-> an array of objects
  const [authors, setAuthors] = useState([]);
  // get authors on load
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors`)
      .then((res) => setAuthors(res.data));
  });

  const removeFromList = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  const handleDelete = (authorId) => {
    axios
      .delete(`http://localhost:8000/api/authors/${authorId}`)
      .then((res) => removeFromList(authorId))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-3">
      <Link to="/authors/new" className='btn btn-primary'>Add an Author</Link>
      <table className="table table-hover mx-auto" style={{width: "600px"}}>
        <thead>
          <tr>
            <th>Author</th>
            <th>Action Available</th>
          </tr>
        </thead>
        <tbody>
          {
            // sort -> alphabetically
            authors
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((author, i) => {
                return (
                  <tr key={i}>
                    <td style={{verticalAlign: "bottom"}}>
                      <Link to={`/authors/${author._id}`} style={{fontSize: "18px"}}>{author.name}</Link>
                    </td>
                    <td>
                      <div className="btn-group">
                        <Link to={`/authors/${author._id}/edit`} className='btn btn-success'>Edit</Link>
                        <button onClick={(e) => handleDelete(author._id)} className='btn btn-danger'>Delete</button>
                      </div>
                    </td>
                  </tr>
                );
              })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
