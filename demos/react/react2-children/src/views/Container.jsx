import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

export default class Container extends Component {
  render() {
    return (
        <>
            <fieldset>
                <legend>Container.jsx using views/separate files</legend>
                <Header/>
                <Main/>
                <Footer/>
            </fieldset>

            <fieldset>
                <legend>Container.jsx using props.children</legend>
                {this.props.children}
            </fieldset>
        </>
    )
  }
}
