import React,{useEffect} from 'react'
import useTodoContext from './hooks/useTodo'
import Routers from './routes/Routers'

function App() {
  const { fetchTodos } = useTodoContext()
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])
  return (
    <div className="container mx-auto mt-5">
     <Routers />
    </div >
  )
}

export default App
