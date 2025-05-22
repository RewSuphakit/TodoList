import React,{ createContext, useState } from 'react';
import axios from 'axios';
const TodoContext = createContext();

function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:3000/todos');
        setTodos(response.data);
        // console.log(response.data);
    };
    

      const createTodo = async (text) => {
        const response = await axios.post('http://localhost:3000/todos', {
            text: text,
            completed: false,
        });
        
        const updatedTodos = [...todos, response.data]; 
        // ...todos คือการสร้าง array ใหม่ที่มี todos เดิมและ todo ใหม่.
        // ... คือ Spread Operator ใน JavaScript
        setTodos(updatedTodos);
        
    };

   
    const editTodoById = async (id, newText, completed) => {
        const response = await axios.put(`http://localhost:3000/todos/${id}`, {
            text: newText,completed: completed
        });
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, ...response.data } : todo
        );
        setTodos(updatedTodos);
        
    };

    const deleteTodoById = async (id) => {
        await axios.delete(`http://localhost:3000/todos/${id}`);
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

  
    const valueToShare = {
        fetchTodos,
        todos,
        editTodoById,
        deleteTodoById,
        createTodo,
    };

    return (
        <TodoContext.Provider value={valueToShare}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoProvider };
export default TodoContext;
