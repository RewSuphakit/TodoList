import React, { useState } from "react";
import useTodoContext from "../hooks/useTodo";

function TodoEdit({ todo, onSubmit, onCancel }) {
  const { editTodoById } = useTodoContext();
  const [newTodo, setNewTodo] = useState(todo.text);
  const [isChecked, setIsChecked] = useState(todo.completed); 

  const handleChange = (e) => setNewTodo(e.target.value);
  const handleCheckboxChange = (e) => setIsChecked(e.target.checked); 

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodoById(todo.id, newTodo, isChecked); 
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col md:flex-row items-center gap-2 p-3 rounded-lg"
    >
      <input
        type="checkbox"
        name="completed"
        id="completed"
        onChange={handleCheckboxChange}
        className="mr-2"
        checked={isChecked}
      />
      <input
        id="editTodoInput"
        className="flex-1 border border-gray-300 p-2 rounded-md text-gray-800"
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="แก้ไขรายการ"
      />
      <div className="flex gap-2">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
          type="submit"
          disabled={!newTodo.trim()}
        >
          Save
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
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
