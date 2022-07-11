import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
    return (
        <fieldset>
            <h1>Current Message</h1>
            <pre>{ props.message }</pre>
        </fieldset>
    );
};
    
export default MessageDisplay;