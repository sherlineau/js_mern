import React, { Component } from 'react'

const mainStyle = {
    backgroundColor: 'red',
    height: '400px',
    width: '700px',
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '10px'
}

export class Main extends Component {
    render() {
        return (
            <div style={mainStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Main