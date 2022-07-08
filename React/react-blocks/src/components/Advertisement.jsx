import React, { Component } from 'react'

const adStyle = {
    backgroundColor: 'purple',
    height: '120px',
    width: '660px',
    margin: '0px auto'
}

export class Advertisement extends Component {
    render() {
        return (
            <div style={adStyle}>Advertisement</div>
        )
    }
}

export default Advertisement