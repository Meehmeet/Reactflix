import React, { useState } from "react";
import "../styles/movie.css";

/**
 * Such-Komponente für Movie-Suche
 * Enthält Input-Feld und Button mit Lupe
 */
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Suche in KASFLIX"
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        className="search-input"
        value={searchTerm}
      />
      <button
        onClick={handleSearch}
        className="search-button"
      >
        <img src="./images/Lupe.png" alt="lupe" className="lupe-icon" />
      </button>
    </div>
  );
}

export default SearchBar;