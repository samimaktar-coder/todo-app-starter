import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
  // Declare your state here
  const [todos, setTodos] = useState([]);

  return (
    <div className='bg-indigo-400 h-screen w-full flex items-center justify-center'>
      <div className='w-[90%] md:w-1/2  xl:w-2/5 bg-white shadow-xl rounded-md p-4'>
        <Input setTodos={setTodos} />
        {/* Write your code here */}
      </div>
    </div>
  );
}

export default App;
