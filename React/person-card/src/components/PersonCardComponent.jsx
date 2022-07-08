import React from 'react'
import { useState } from 'react'

const PersonCardComponent = (props) => {

  const {firstName, lastName, a, hairColor} = props
  const [age, setAge] = useState(a)

  const addAge = ()=> {
    setAge(age+1)
  }

  return (
    <div>
    <h1>{lastName}, {firstName}</h1>
    <p>Age: {age} </p>
    <p>Hair Color: {hairColor}</p>
    <button onClick={addAge}>Birthday Button for {firstName} {lastName}</button>
  </div>
  )
}

export default PersonCardComponent