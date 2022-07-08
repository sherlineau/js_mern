import React from 'react'
import { useState } from 'react'
import Display from './Display'

const From1 = () => {
    // username = "anonymous" at beginning
    // it will plug into input value on refresh
    const [username, setUsername] = useState("anonymous")
    const [age, setAge] = useState(18)
    const [password, setPassword] = useState("")

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <fieldset>
            <legend>Form1.jsx</legend>
            <h1>Form</h1>
            <p>
                <label htmlFor="username">Username:</label>
                {/* typing something in the text box will triger the onChange event -> gets the input and changes the username value 
                if we only have on argument -> e does not need parenthesis*/}
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
            </p>

            <p>
                <label>Age:</label>
                {/* input -> recommended things to have:
                -name
                -value
                -onChange */}
                <input type="number" name="age"  value={age} onChange={e=>setAge(e.target.value)}/>
            </p>

            <p>
                <label>Password: </label>
                <input type="password" name="password" value={password} onChange={handlePassword} />
            </p>

            <Display username={username} age={age} password={password}/>
        </fieldset>
    )
}

export default From1