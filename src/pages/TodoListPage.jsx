import React from 'react'
import From from '../components/TodoForm'
import List from '../components/TodoList'

function TodoListPage() {
  return (
     <div className='border border-gray-300 rounded-lg  shadow-lg p-4'>     
      <From  />
      <List  />
      </div>
  )
}

export default TodoListPage
