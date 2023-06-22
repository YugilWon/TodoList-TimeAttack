import React, { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import Topbar from "./components/Topbar";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodo] = useState([
    {
      id: uuid(),
      title: "후발대 모두 화이팅!!",
      content: "모두 화이팅입니다~",
      isDone: false,
    },
    {
      id: uuid(),
      title: "후발대 모두 화이팅~",
      content: "모두 화이팅입니다!!",
      isDone: true,
    },
  ]);

  return (
    <>
      <div className="Layout">
        <Topbar />
        <Input todos={todos} setTodo={setTodo} />
        <TodoList todos={todos} setTodo={setTodo} />
      </div>
    </>
  );
}

export default App;
