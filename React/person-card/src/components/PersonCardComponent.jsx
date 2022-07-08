import React, { Component } from 'react'

export default class PersonCardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: props.age
    }
  }

  render() {
    //destructure prop
    //props are an "empty" object created by the Component parent class
    //key names are passed in through App.js [firstName = "asdfasf"] => {firstName: "asdfasf"}
    const {firstName, lastName, age, hairColor} = this.props

    // function to set state
    const addAge = ()=> {
      this.setState(
        {
          age : this.state.age + 1
        }
      )
    }
    return (
      <div>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {this.state.age} </p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={addAge}>Birthday Button for {firstName} {lastName}</button>
      </div>
    )
  }
}
