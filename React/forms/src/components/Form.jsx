import React, { useState } from 'react'
import Display from './Display';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };



    return (
        <>
        <form onSubmit={ createUser }>
            {/* form message displayed based on if form has been submitted */}
            { hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={ e=> setFirstName(e.target.value)} value={firstName}/>
                {
                    // validation checks length greater than one allows the message to be hidden until something is typed
                    firstName.length > 0 && firstName.length < 2 ? <span style={{color:"red"}}>First name must be at least 2 characters</span>:""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={ e=> setLastName(e.target.value)} value={lastName}/>
                {
                    lastName.length > 0 && lastName.length < 2 ? <span style={{color:"red"}}>Last name must be at least 2 characters</span>:""
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" name="email" onChange={ e=> setEmail(e.target.value)} value={email}/>
                {
                    email.length > 0 && email.length < 5 ? <span style={{color:"red"}}>Email must be at least 5 characters</span>:""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={ e=> setPassword(e.target.value)} value={password} />
                {
                    password.length > 0 && password.length < 8 ? <span style={{color:"red"}}>Password must be at least 8 characters</span>:""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="confirmPass"  onChange={ e=> setConfirmPass(e.target.value)} value={confirmPass}/>
                {
                    
                    confirmPass.length > 0 && confirmPass !== password ? <span style={{color:"red"}}>Passwords must match</span>:""
                }
            </div>
            <input type="submit" value="Create User" />

        </form>

        <Display firstName={firstName} lastName={lastName} email = {email} password={password} confirmPass={confirmPass}/>
        </>
    )
}

export default Form