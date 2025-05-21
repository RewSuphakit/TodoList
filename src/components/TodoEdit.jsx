import React, { useState } from "react";
import useTodoContext from "../hooks/useTodo";

function TodoEdit({ todo, onSubmit, onCancel }) {
  const { editTodoById } = useTodoContext();
  const [newTodo, setNewTodo] = useState(todo.text);

  const handleChange = (event) => setNewTodo(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodoById(todo.id, newTodo);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="todo-edit">
      <label htmlFor="editTodoInput">แก้ :</label>
      <div className="flex items-center justify-start mt-4">
        <input
          id="editTodoInput"
          className="border p-2 w-full mr-2"
          type="text"
          value={newTodo}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-end mt-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50"
          type="submit"
          disabled={!newTodo.trim()}
        >
          Save
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TodoEdit;
