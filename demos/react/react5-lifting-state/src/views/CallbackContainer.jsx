import React, {useState} from 'react'
import { SiblingDisplay } from '../components/callback/SiblingDisplay'
import SiblingCounter from '../components/callback/SiblingCounter'

const CallbackContainer = () => {

    const [countAtParent, setCountAtParent] = useState(0)

    // TODO: Create function for child to talk to parent
    const receiveNewCount = () => {
        setCountAtParent(countAtParent+1)
    }

    return (
        <fieldset style={{backgroundColor: "gainsboro"}}>
            <legend> CallbackContainer.jsx</legend>
            {/* receive new count function is sent to child SiblingCounter
                receiveNewCount is whatever function is inside the parent */}
            <SiblingCounter parentReceiveFunction = { receiveNewCount } />
            <SiblingCounter parentReceiveFunction = { receiveNewCount }/>
            <SiblingCounter parentReceiveFunction = { receiveNewCount }/>
            {/* if i want siblings to talk to each other, I have to go through the parent -> so counter adds count returns it to parent -> parent sends it to display 
            count is sent to display as props.count */}
            <SiblingDisplay count = {countAtParent} />
            <h1> Count in Parent : {countAtParent}</h1>
        </fieldset>
    )
}

export default CallbackContainer

// pass info from parent component --> child component using [props]

// pass info from child --> parent 
// cant pass info easily