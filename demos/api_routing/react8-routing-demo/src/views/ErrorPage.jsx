import React from 'react'
import {useNavigate} from 'react-router-dom'
// if redirect to error page show button to go back or home
// whenever we want to redirect we use navigate

const ErrorPage = () => {
    const navigate = useNavigate()

    const redirectToHome = () =>{
        navigate("/home")
    }

    const redirectBack = () => {
        // goes back one page -> -2 would go back two pages
        navigate(-1)
    }

    return (
        <fieldset>
            <legend>ErrorPage</legend>
            <button onClick={redirectToHome}>Back to Home</button>
            <button onClick={redirectBack}>Go Back</button>
        </fieldset>
    )
}

export default ErrorPage