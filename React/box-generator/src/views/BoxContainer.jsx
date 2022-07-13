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
        <div className='container mx-auto'>
            <h1>BoxContainer.jsx</h1>
            <BoxForm onNewBox = {receiveNewBoxes}/>
            <BoxDisplay boxes = {boxes}/>
        </div>
    )
}

export default BoxContainer