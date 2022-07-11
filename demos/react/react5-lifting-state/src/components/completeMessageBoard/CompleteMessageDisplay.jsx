import React from 'react'


const CompleteMessageDisplay = (props) => {

    // TODO: able to delete something
    const handleDelete = (indexToDelete) => {
        // 1. get the index
        // onClick function (e)=>handleDelete(i)
        // 2. filter out array
        const filteredList = props.messages.filter((element, i) => {
            return i !== indexToDelete;
        })
        // 3. update array in props
        props.onListUpdate(filteredList)
    }

    // TODO: uncheckbox -> change importance
    const handleImportant = (e, index) => {
        // 1. get updated info
        // onChange event in input checkbox
        // 2. create updated list
        const messageCopy = [...props.messages]
        messageCopy[index].isImportant = e.target.checked
        // 3. update array
        props.onListUpdate(messageCopy)
    }

    return (
        <fieldset>
            <legend>CompleteMessageDisplay.jsx</legend>
            {
                props.messages.map((eachMessage, i) => {
                    return (
                        <pre key={i} style={eachMessage.isImportant ? { color: "red" } : { color: "black" }}>To {eachMessage.receiver}: {eachMessage.content}
                            <input type="checkbox" checked={eachMessage.isImportant} onChange={(e) => handleImportant(e, i)} />
                            <button onClick={(e) => handleDelete(i)}>Delete</button>
                        </pre>
                    )
                })
            }
        </fieldset>
    )
}

export default CompleteMessageDisplay