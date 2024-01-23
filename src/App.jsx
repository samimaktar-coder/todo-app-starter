import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  // Declare your state here
  const [todos, setTodos] = useState([]);

  return (
    <div
      className='bg-indigo-400 h-screen w-full flex items-center justify-center'
      data-testid='flex-div'
    >
      {/* Write your code here */}
    </div>
  );
}

export default App;
