import React from "react";
import "../styles/movie.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Hilfsfunktion für bessere Lesbarkeit
  const isActivePage = (pageNum) => currentPage === pageNum;
  
  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, startPage + 6);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`page-button ${isActivePage(i) ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(1)}
        className="page-button"
      >
        First
      </button>
      {getPageNumbers()}
    </div>
  );
}

export default Pagination;