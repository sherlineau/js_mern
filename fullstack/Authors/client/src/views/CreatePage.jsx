import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";

const CreatePage = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const createAuthor = (author) => {
        // redirect to dashboard on successful post
        axios
            .post(`http://localhost:8000/api/authors`, author)
            .then((res) => navigate("/"))
            .catch((err) => {
                // temp variable to store all our messages
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
            <h1>Add an author</h1>
            <Form onSubmitProp={createAuthor} initialName="" errors={errors} />
        </div>
    );
};

export default CreatePage;
