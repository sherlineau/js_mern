import React from 'react'
import { useState } from 'react'
import CompleteMessageDisplay from '../components/completeMessageBoard/CompleteMessageDisplay'
import CompleteMessageForm from '../components/completeMessageBoard/CompleteMessageForm'

// 1. Complete the form
// 2. 

const CompleteMessageBoard = () => {
    const [messages, setMessages] = useState([])
    //messages will be an array of message object 
    /*messages = [ 
        { content: "Hi" , 
        receiver: "Alex Miller", 
        isImportant: true},
    ] */
    
    const receiveNewMessage = (newMessageObject) => {
        setMessages([...messages,newMessageObject])
        // get previous array from ...messages
        // add new messageObject to this array
        // [newMessageObject,...messages] if we want new message to be first
    }

    const updateList = (updatedList) =>
    {
        setMessages(updatedList)
    }

    return (
        <fieldset>
            <legend>CompleteMessageBoard.jsx</legend>
            <CompleteMessageForm onNewMessage = {receiveNewMessage}/>
            <CompleteMessageDisplay messages={messages} onListUpdate = {updateList}/>
        </fieldset>
    )
}

export default CompleteMessageBoard