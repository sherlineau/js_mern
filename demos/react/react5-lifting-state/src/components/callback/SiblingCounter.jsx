import React from 'react'

// props
// 

const SiblingCounter = (props) => {

    //uses the parentReceiveFunction( which callbacks to receiveNewCount) to add count from child's button 
    const addCount = () => {
        props.parentReceiveFunction();
    }

    return (
        <fieldset style={{backgroundColor: "powderblue"}}>
            <legend> SiblingCounter.jsx</legend>
            <button onClick={addCount}> Add Count!</button>
        </fieldset>
    )
}

export default SiblingCounter