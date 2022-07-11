import React from 'react'
import { useState } from 'react'
import BoxDisplay from '../components/box/BoxDisplay'
import BoxForm from '../components/box/BoxForm'

const BoxContainer = () => {
    const [boxes, setBoxes] = useState([])

    const receiveNewBoxes = (newBox) => {
        setBoxes([...boxes,newBox])
    }

    return (
        <fieldset className='container'>
            <legend>BoxContainer.jsx</legend>
            <BoxForm onNewBox = {receiveNewBoxes}/>
            <BoxDisplay boxes = {boxes}/>
        </fieldset>
    )
}

export default BoxContainer