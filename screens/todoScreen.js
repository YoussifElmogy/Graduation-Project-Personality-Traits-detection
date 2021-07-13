import React from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import { useState, useEffect } from "react";

export default function todoScreen() {
  const [inputtxt, setinputtxt] = useState("");
  const [todos, settodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filterTodos, setfilterTodos] = useState([]);
  

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterhandler();
    saveLocalTodos();
  }, [todos, status]);
  //functions
  const filterhandler = () => {
    switch (status) {
      case "completed":
        setfilterTodos(todos.filter((todo) => todo.completed === true));

        break;
      case "uncompleted":
        setfilterTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setfilterTodos(todos);

        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      settodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header className="todoheader">
        <h1>Users Todo List</h1>
      </header>
      <Form
        todos={todos}
        settodos={settodos}
        inputtxt={inputtxt}
        setinputtxt={setinputtxt}
        setstatus={setstatus}
      />
      <TodoList
        filterTodos={filterTodos}
        settodos={settodos}
        todos={todos}
      ></TodoList>
    </div>
  );
}
