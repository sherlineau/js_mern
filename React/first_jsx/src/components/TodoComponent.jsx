import React, { Component } from 'react'

class TodoComponent extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        <li>{todos}</li>
      </div>
    )
  }
}

export default TodoComponent
