import React, { useState } from 'react';

const MessageForm = (props) => {
    // for each input, create a state variable
    const [msg, setMsg] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg);

        //clears textarea form 
        setMsg("")
    };
    
    // TODO: messageContent, receiver(dropdown menu), isImportant (checkbox)
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};
    
export default MessageForm;