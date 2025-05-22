import React, { useState } from 'react';
import useTodoContext from '../hooks/useTodo';
import TodoEdit from './TodoEdit';
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function TodoAction({ todo }) {
  const { deleteTodoById } = useTodoContext();
  const [editing, setEditing] = useState(false);

  const handleDeleteClick = () => {
    deleteTodoById(todo.id);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSubmit = () => {
    setEditing(false);
  };

  return (
    <div className="w-full flex justify-between items-center gap-2  rounded-lg ">
      {editing ? (
        <TodoEdit todo={todo} onSubmit={handleSubmit} onCancel={() => setEditing(false)} />
      ) : (
        <>
          <div className="text-lg text-gray-800 break-words p-4 overflow-auto">
            {todo.completed ? (
              <span className="line-through text-gray-500">{todo.text}</span>
            ) : (
              todo.text
            )}
           
            </div>
          <div className="flex gap-2">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-white px-4 py-2 rounded"
              onClick={handleEditClick}
            >
              <BiSolidEdit size={20}  />
              
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-2 rounded"
              onClick={handleDeleteClick}
            >
            <MdDelete size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoAction;
