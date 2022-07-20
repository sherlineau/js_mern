import React, { useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const Details = () => {
  const [author, setAuthor] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => setAuthor(res.data));
  });
  return (
    <div className="mt-3">
      <Link to="/" className='btn btn-primary'>Home</Link>

      {author ? (
        <h1>Author: {author.name}</h1>
      ) : (
        <div>
          <h1>
            We're sorry, but we could not find the author you are looking for.
            Would you like to add this author to our database?
          </h1>
          <Link to="/authors/new">Add an Author</Link>
        </div>
      )}
    </div>
  );
};

export default Details;
