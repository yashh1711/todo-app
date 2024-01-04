import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { CreateTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log("UE called");
    axios.get("http://localhost:3000/todos").then((res) => {
      // console.log(res);
      setTodos(res.data.todos);
    });
  }, [todos]);
  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  );
}

export default App;
