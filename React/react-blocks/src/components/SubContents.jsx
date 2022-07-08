import React, { Component } from 'react'

const subStyle = {
    backgroundColor: 'yellow',
    height: '230px',
    width: '210px',
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '15px 10px'
}

export class SubContents extends Component {
    render() {
        return (
            <div style={subStyle}>SubContents</div>
        )
    }
}

export default SubContents