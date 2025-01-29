import React from "react";
import "../styles/movie.css";

function SearchBar({ onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Suche in KASFLIX"
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button
        onClick={() => onSearch(document.querySelector("input").value)}
        className="search-button"
      >
        <img src="./images/Lupe.png" alt="lupe" className="lupe-icon" />
      </button>
    </div>
  );
}

export default SearchBar;