import React from 'react'

const TodoDisplay = (props) => {

  
  //function to delete todo by index
  const handleDelete = (indexToDelete) => {
    // returns an array using filter that gets everything but the specified index
    const filteredList = props.todos.filter((element,i) => {
      return i !== indexToDelete;
    })
    
    //sends new filtered todo list back to the parent to refresh page with new list
    props.onTodosUpdate(filteredList)
  }

  // sets is completed value for specific todo[index]
  const handleCompleted = (e, index) => {
    const todoCopy = [...props.todos]
    todoCopy[index].isCompleted = e.target.checked
    props.onTodosUpdate(todoCopy)
  }

  return (
    <fieldset>
      <legend>TodoDisplay.jsx</legend>
      {/* display all todos in array */}
      {
        props.todos.map((eachTodo,i) => {
          return (
            // if isCompleted is true -> set style text decoration to line-through [strikethrough]
            <p key={i} style={eachTodo.isCompleted ? {textDecoration: "line-through"}:{textDecoration:"none"}}>{eachTodo.content}
              <input type="checkbox" checked={eachTodo.isCompleted} onChange={e=> handleCompleted (e,i)}/>
              <button onClick={e=>handleDelete(i)}>Delete</button>

            </p>
          )
        })
      }
    </fieldset>
  )
}

export default TodoDisplay