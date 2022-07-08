import React, { Component } from 'react'

const navStyle = {
    backgroundColor: 'lightblue',
    height: '400px',
    width: '200px',
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '10px'
}


export class Navigation extends Component {
    render() {
        return (
            <div style={navStyle}>Navigation</div>
        )
    }
}

export default Navigation