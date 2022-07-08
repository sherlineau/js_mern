import React, {useState} from 'react'
//1. whenever we want to use state, we need to import {useState} and instantiate usestate

const FunctionalStateComponent = () => {
    //2. instantiate useState
    //useState()  <- parenthesis is the initial value 
    //count is variable
    //setCount is method
    //can only use method for its variable
    // setcount can only be used for count
    const [count, setCount] = useState(0);
    const [likes, setLikes] = useState(100);

    const addLikes = ()=> {
        setLikes(likes+1)
    }

    return (
        <fieldset>
            <legend>FunctionalStateComponent.jsx</legend>
            <button onClick={()=>setCount(count+1)}> Add Count </button>
            <button onClick={addLikes}> Add Likes </button>

            {/* to display state count */}
            <h2>Count: {count}</h2>
            <h2>Likes: {likes}</h2>
        </fieldset>
    )
}

export default FunctionalStateComponent