import React from 'react'

const BoxDisplay = (props) => {
    return (
        <div>
            <h2>BoxDisplay.jsx</h2>
            <div style={{display: 'flex'}}>
            {
                props.boxes.map((eachBox,i) => {
                    return <div key={i} style={{
                        width:eachBox.width + "px" ,
                        height:eachBox.height + "px",backgroundColor:eachBox.color,
                        margin: "2px"}}></div>
                })
            }
            </div>
        
        </div>
    )
}

export default BoxDisplay
