"use client";

export default function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = ["semua", "aktif", "selesai"];

  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-btn ${currentFilter === filter ? "active" : ""}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}