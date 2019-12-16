import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoHeader />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
