import React from 'react'
import useTodoContext from '../hooks/useTodo'
import { toast } from 'react-toastify';
function TodoForm() {
  const { createTodo } = useTodoContext()
  const [text, setText] = React.useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
 const handleSubmit = (e) => {
  // text.trim() คือการตัดช่องว่างซ้ายขวาออก เช็คว่า text.trim() 
  // เป็นค่าว่าง ('')
  e.preventDefault();
  if (text.trim() === '') {
     toast.warn('กรุณากรอกข้อมูลให้ครบทุกช่อง', { position: 'top-center' });
    return;
  }
  createTodo(text);
  setText('');
}


  return (
    <div className='p-4  mb-4 rounded shadow-sm '>  
         <h3> Add Todo </h3>
            <form onSubmit={handleSubmit} className='flex items-center justify-center mt-4'>
                <input className=' p-2 w-full mr-2  ' type="text" value={text} onChange={handleChange} placeholder="Add Todo" />
                <button className='bg-blue-500 text-white px-4 py-2 rounded mr-2 ' type="submit">Add</button>
                <button  className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={() => setText('')}>Clear</button>
            </form>
    </div>
  )
}

export default TodoForm
