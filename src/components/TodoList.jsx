import React from 'react'
import useTodoContext from '../hooks/useTodo'
import TodoShow from './TodoShow'

function TodoList() {
  const { todos } = useTodoContext()

 const renderedTodos = todos.map((todo) => {
  return (
    <div  key={todo.id} >
     <div className=''>
      
       <TodoShow todo={todo} />
      </div> 
    </div>
  )
})
  return (
    <div className=''>
      <div className="">
         {renderedTodos}
      </div>
     
    </div>
  )
}

export default TodoList
