import { createContext } from "react"
import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";


export const Context = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((prev)=> [...prev, newTodo]);
  }

  function deleteTodo (todoIndex) {
    setTodos((prev) => prev.filter((_, index) => index !== todoIndex))

  }

  function editTodo (newTodo, todoIndex) {
    setTodos((prev) => 
  prev.map((todo, index) => index === todoIndex ? newTodo : todo))

  }
  

  return (
    <Context.Provider value={{todos, addTodo, deleteTodo, editTodo, setTodos}} >
      <Input />
      <List />
    </Context.Provider>


    
  )
}

export default App
