import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/AddTodo";

function App() {
  return (
    <>
      <CreateTodo></CreateTodo>
    </>
  );
}

export default App;
