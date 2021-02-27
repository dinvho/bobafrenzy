import React from 'react'

export default function Todo({ todos, toggleTodo }){
  function handleTodoClick(){
    toggleTodo(todos.id)
  }
  return (
    <div>
      <label>
        <input type='checkbox' checked={todos.complete} onChange={handleTodoClick}/>
        {todos.name}
      </label>
    </div>
  )
}
