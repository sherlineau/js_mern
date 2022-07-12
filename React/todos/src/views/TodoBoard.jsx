import React, { useState } from 'react'
import TodoDisplay from '../components/TodoDisplay'
import TodoForm from '../components/TodoForm'

const TodoBoard = () => {
  // initialize todos array with use state
  const [todos, setTodos] = useState([])

  //resets the todos array with a copy of the previous todos array and the new todo
  const receiveNewTodo = (newTodo) => {
    setTodos([...todos,newTodo])
  }

  //update array function for delete functionality
  const updateTodos = (updatedTodoList) => {
    setTodos(updatedTodoList)
  }

  return (
    <fieldset>
      <legend>TodoBoard.jsx</legend>
      <TodoForm onNewTodo = {receiveNewTodo} />
      <TodoDisplay todos = {todos} onTodosUpdate = {updateTodos} />
    </fieldset>
  )
}

export default TodoBoard