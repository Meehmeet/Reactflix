import React from "react";
import "../styles/movie.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 3);
    let endPage = Math.min(totalPages, currentPage + 3);

    if (currentPage <= 4) {
      endPage = Math.min(7, totalPages);
    } else if (currentPage >= totalPages - 3) {
      startPage = Math.max(totalPages - 6, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`page-button ${currentPage === i ? "active" : ""}`}
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