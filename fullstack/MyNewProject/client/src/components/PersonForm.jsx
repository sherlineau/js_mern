import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
    // keep track of what is being typed using useState
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // handler for when form is submitted
    const submitHandler = e => {
        // prevent default behavior of submit
        e.preventDefault();
        // post request
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={submitHandler}>
            <label>First Name</label>
            <input type="text" onChange={e=>setFirstName(e.target.value)} value={firstName} />
            <label>Last Name</label>
            <input type="text" onChange={e=>setLastName(e.target.value)} value={lastName} />
            <button type="submit">Create Person</button>
        </form>
    )
}

export default PersonForm