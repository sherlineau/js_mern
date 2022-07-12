import React, {useState} from 'react'

const TodoForm = (props) => {
  const [content,setContent] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  

  const handleSubmit = e => {
    e.preventDefault()
    props.onNewTodo({content, isCompleted})
    setContent("")
  }

  return (
    <fieldset>
      <legend>TodoForm.jsx</legend>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" value={content} onChange={e=> setContent(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </fieldset>

  )
}

export default TodoForm