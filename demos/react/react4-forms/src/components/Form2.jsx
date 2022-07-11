import React, {useState} from 'react'
import Display from './Display'

const Form2 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(10)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit =(e) => {
        e.preventDefault()
        if (username.length > 2 && age > 20) {
            console.log({username,age});
            setIsSubmitted(true);
        } else {
            alert("Fix your form please")
        }

    }

    // form message will return a string
    const formMessage = ()=> {
        if (isSubmitted) {
            return "Thank you for submitting the form"
        } else {
            return "Please fill in the form"
        }
    } 

    return (
        <fieldset>
            <legend>Form2.jsx</legend>

            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                    {
                        username.length < 3?<span style={{color:"red"}}>Username should be at least 3 characters</span>:""
                    }
                </p>

                <p>
                    <label>Age:</label>
                    <input type="number" name="age"  value={age} onChange={e=>setAge(e.target.value)}/>
                    {
                        age<21?<span style={{color:"red"}}>Must be at least 21 years old</span>:""
                    }
                </p>
                <button type="submit" disabled={username.length < 3 || age < 21}>Submit</button>
            </form>

            <Display username={username} age={age}/>

        </fieldset>
    )
}

export default Form2