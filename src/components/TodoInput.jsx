"use client";
import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          placeholder="Tambahkan tugas baru..."
          className="todo-input"
        />
        <button onClick={handleSubmit} className="btn-add">
          Tambah
        </button>
      </div>
    </div>
  );
}