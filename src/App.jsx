import React from 'react'
import From from './components/TodoForm'
import List from './components/TodoList'

function App() {
  return (
    <div className="container mx-auto mt-5">
   <div className='border border-gray-300 rounded-lg p-4 w-3/4 mx-auto shadow-lg'>
    <div>
      <div className=' '><From  /></div>
      <div className=''> <List  /></div>
    </div>
      </div>
    </div >
  )
}

export default App
