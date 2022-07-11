import React, { useState } from 'react'

// 1. Create a form ( content, receiver, isImportant)
// 2. input --> state

const CompleteMessageForm = (props) => {

    // 2. Create variables for each input
    const [content, setContent] = useState("")
    const [receiver, setReceiver] = useState("")
    // default receiver state -> is "" -> refreshing page will be empty state
    // option 1: hard code default value to first option
    // option 2: have a hidden option 

    const [isImportant, setIsImportant] = useState(true)
    // checkboxes do not have a value, need to use checked 

    const handleSubmit = (e) => {
        // prevent default is only needd for form submission
        e.preventDefault()
        props.onNewMessage ({content , receiver , isImportant})

    }

    return (
        <fieldset>
            <legend>CompleteMessageForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Message Content</label>
                    <input type="text" name="content" value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <div>
                    <label>Receiver</label>
                    <select name="receiver" value={receiver} onChange={e => setReceiver(e.target.value)}>
                        {/* displays chooose a receiver but does not allow user to select the hidden option */}
                        <option hidden>Choose a receiver</option>
                        <option value="Alex Miller">Alex Miller</option>
                        <option value="Martha Smith">Martha Smith</option>
                        <option value="Roger Anderson">Roger Anderson</option>
                    </select>
                </div>

                <div>
                    <label>Important?</label>
                    <input type="checkbox" name="isImportant" checked={isImportant} onChange={e => setIsImportant(e.target.checked)} />
                </div>
                <button type="submit">Send</button>
            </form>
        </fieldset>
    )
}

export default CompleteMessageForm