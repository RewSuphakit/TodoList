import React, { useState } from 'react'
import useTodoContext from '../hooks/useTodo'
import TodoEdit from './TodoEdit'

function TodoShow({ todo }) {
  const { deleteTodoById } = useTodoContext()
  const [editing, setEditing] = useState(false)

  const handleDeleteClick = () => {
    deleteTodoById(todo.id)
  }

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleSubmit = () => {
    setEditing(false)
  }

  let content = <h3>{todo.text}</h3>
  if (editing) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} onCancel={() => setEditing(false)} />
  }

  return (
    <div className='p-4  rounded shadow-sm'>
      {content}
      {!editing && (
        <div className='flex justify-end mt-4'>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded'
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default TodoShow
