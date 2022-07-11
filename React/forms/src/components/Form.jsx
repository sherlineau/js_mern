import React, { useState } from 'react'
import Display from './Display';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    }

    return (
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={ e=> setFirstName(e.target.value)} value={firstName}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={ e=> setLastName(e.target.value)} value={lastName}/>
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" name="email" onChange={ e=> setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={ e=> setPassword(e.target.value)} value={password} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="confirmPass"  onChange={ e=> setConfirmPass(e.target.value)} value={confirmPass}/>
            </div>
            <input type="submit" value="Create User" />

        </form>

        <Display firstName={firstName} lastName={lastName} email = {email} password={password} confirmPass={confirmPass}/>
        </>
    )
}

export default Form