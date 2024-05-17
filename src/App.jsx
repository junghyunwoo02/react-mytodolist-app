import { useState } from "react";
import "./App.css";
import { Input } from "./components/input/Input.jsx";
import TodoDoneList from "./components/list/TodoDoneList.jsx";

function App() {
  const initialState = [
    {
      id: 1,
      title: "리액트 과제하기",
      contents: "리액트 과제를 진행해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ];
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <header className="container">
        <div>My Todo List</div>
        <div>React</div>
      </header>
      <main style={{ padding: "10px" }}>
        <Input todos={todos} setTodos={setTodos} />
        <div>
          <TodoDoneList todos={todos} setTodos={setTodos} />
        </div>
      </main>
    </div>
  );
}

export default App;
