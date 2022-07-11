import React from 'react'
import { useState } from 'react'
import MessageDisplay from '../components/message/MessageDisplay'
import MessageForm from '../components/message/MessageForm'
import MessageHistoryDisplay from '../components/message/MessageHistoryDisplay'

const MessageBoard = () => {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    const [messages, setMessages] = useState([])

    const receiveNewMessage = (newMessage) => {
        setCurrentMsg(newMessage);
        setMessages([newMessage,...messages]);
    }



    return (
        <fieldset>
            <legend>Messageboard.jsx</legend>
            <MessageForm onNewMessage= {receiveNewMessage} />
            <MessageDisplay message = {currentMsg} />
            <MessageHistoryDisplay messages = {messages} />
            <h1>currentMsg: {currentMsg} </h1>
        </fieldset>
    )
}

export default MessageBoard