"use client";
import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import "./App.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("semua");

   useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    } else {
      const defaultTodos = [
        { id: 1, text: "Belajar React", done: false },
        { id: 2, text: "Membuat To-Do List", done: false }
      ];
      setTodos(defaultTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "aktif") return !todo.done;
    if (filter === "selesai") return todo.done;
    return true;
  });

  return (
    <div className="app-container">
      <div className="todo-wrapper">
        <div className="todo-card">
          <h1 className="title">📝 My To-Do List</h1>
          
          <TodoInput onAdd={addTodo} />
          
          <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
          
          <div className="todo-list-container">
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
              currentFilter={filter}
            />
          </div>
          
          <div className="todo-stats">
            Total tugas: {todos.length} | Selesai: {todos.filter(t => t.done).length}
          </div>
        </div>
      </div>
    </div>
  );
}
