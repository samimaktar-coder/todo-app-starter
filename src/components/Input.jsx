import React, { useState } from "react";

function Input({ setTodos }) {
  // Declare your state here
  const [inputValue, setInputValue] = useState("");

  function addTodo(e) {
    // write the logic of this function here
    e.preventDefault();
    if (!inputValue) return;
    setTodos((prevData) => [
      ...prevData,
      { id: Date.now(), title: inputValue, completed: false },
    ]);
    setInputValue("");
  }

  return (
    <form onSubmit={addTodo} className='flex h-11'>
      {/* Write the code for the Input component */}
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Wake up at 7am'
        className='bg-gray-200 outline-none border border-gray-400 rounded-s-md h-full p-1 basis-4/5'
      />
      <button
        type='submit'
        className='basis-1/5 bg-cyan-500 rounded-e-md text-white hover:bg-cyan-600'
      >
        Add Item
      </button>
    </form>
  );
}

export default Input;
