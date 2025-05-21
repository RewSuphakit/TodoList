import React from 'react';
import useTodoContext from '../hooks/useTodo';
import TodoShow from './TodoShow';

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div className="grid grid-cols-1 gap-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-full border border-gray-300 p-4 rounded-md  shadow-sm bg-white"
        >
          <TodoShow todo={todo} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
// Compare this snippet from src/components/TodoList.jsx: