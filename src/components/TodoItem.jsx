"use client";
import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="todo-edit-input"
          />
          <button onClick={handleEdit} className="btn-save">
            Simpan
          </button>
          <button onClick={() => setIsEditing(false)} className="btn-cancel">
            Batal
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => onToggle(todo.id)}
            className={`todo-text ${todo.done ? "done" : ""}`}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)} className="btn-edit">
            Edit
          </button>
          <button onClick={() => onDelete(todo.id)} className="btn-delete">
            Hapus
          </button>
        </>
      )}
    </li>
  );
}