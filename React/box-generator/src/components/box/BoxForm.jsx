import React from 'react'
import { useState } from 'react'

const BoxForm = (props) => {

    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox({color,width,height})
        setColor("")
        setWidth("")
        setHeight("")
    };

    return (
        <div className="form-group" style={{width:"500px"}}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Color </label>
                    <input className="form-control" type="text" name="color" value={color} onChange={ e => setColor(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">Width </label>
                    <input className="form-control" type="text" name="color" value={width} onChange={ e => setWidth(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">Height </label>
                    <input className="form-control" type="text" name="color" value={height} onChange={ e => setHeight(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-lg btn-success mt-3">Add</button>
            </form>
        </div>
    )
}

export default BoxForm