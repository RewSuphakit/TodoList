import React, { useState } from "react";
import useTodoContext from "../hooks/useTodo";
import { toast } from "react-toastify";
import { FaListCheck } from "react-icons/fa6";
function TodoForm() {
  const { createTodo } = useTodoContext();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      toast.warn("กรุณากรอกข้อความ", { position: "top-center" });
      return;
    }
    createTodo(text);
    setText("");
  };

  return (
    <div className=" mb-4 rounded">
      <div className="bg-gradient-to-br from-white to-pink-100 p-8 rounded-2xl shadow-lg flex items-center justify-center">
          <div className="text-4xl font-bold mb-4 flex items-center justify-center">TodoList </div>
          <div className="text-4xl font-bold mb-4 ml-4"><FaListCheck /></div>
      </div>
    
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-4"
      >
        <input
          className="p-4 w-full mr-2 shadow-sm  rounded"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="เพิ่มรายการ Todo"
        />
        <button
          className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
          type="submit"
        >
          Add
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
          onClick={() => setText("")}
        >
          Clear
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
