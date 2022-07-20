import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Form from "../components/Form";

const UpdatePage = (props) => {
  const navigate = useNavigate();
  // get id from params
  const { id } = useParams();
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  // get author on load using id from params
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      // on successful get -> set author state to response
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => navigate("/error"));
  });

  // update backend
  const updateAuthor = (author) => {
    axios
      .put(`http://localhost:8000/api/authors/${id}`, author)
      // on successful update -> redirect to dashboard
      .then((res) => navigate("/"))
      // on failed update -> display validation errors
      .catch((err) => {
        const errorMessages = {};
        const errorResponse = err.response.data.errors;
        for (const key in errorResponse) {
          errorMessages[key] = errorResponse[key].message;
        }
        setErrors(errorMessages);
      });
  };

  return (
    <div className="mt-3">
      <Link to="/" className='btn btn-primary'>Home</Link>
      <h1>Edit an author</h1>
      {loaded && (
        <Form
          onSubmitProp={updateAuthor}
          initialName={author.name}
          errors={errors}
        />
      )}
    </div>
  );
};

export default UpdatePage;
