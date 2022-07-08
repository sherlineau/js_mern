import React, { Component } from 'react'

// 1. Direct Import
import '../stylings/directimport.css'

// 3. css modules
import styles from './StylingComponent.module.css'

// 2.2 Inline Object created before class
const inLine2 = {
    color: 'white',
    backgroundColor: 'rebeccaPurple'
}

export class StylingComponent extends Component {
    render() {
        // 2.3 Inline style object created inside class
        const inLine3 = {
            color: 'white',
            backgroundColor: 'pink'
        }

        return (
            <div>
                <h1>StylingComponent</h1>
                <button className='btn btn-success'>Bootstrap</button>

                <div className='directimport'>1. Direct Import</div>
                <div style={ { color:'white', backgroundColor:'teal' } }>2.1 inline style</div>
                <div style={ inLine2 }>2.2 inline style</div>
                <div style={ inLine3 }>2.3 inline style</div>
                <div className={styles.cssmodule}>3. CSS Modules</div>
            </div>
        )
    }
}

export default StylingComponent