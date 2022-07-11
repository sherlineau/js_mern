import React from 'react'

const MessageHistoryDisplay = (props) => {
    return (
        <fieldset>
            <h1>Messages</h1>
            {
                props.messages.map((message,i) => {
                    return(
                    <pre key={i}> {message}</pre>
                )
                })
            }
        </fieldset>
    )
}

export default MessageHistoryDisplay