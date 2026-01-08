"use client";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, onEdit, currentFilter }) {
  if (todos.length === 0) {
    if (currentFilter === "aktif") {
      return (
        <p className="empty-message success">
          🎉 Semua tugas selesai!
        </p>
      );
    }
    return <p className="empty-message">Belum ada tugas</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}