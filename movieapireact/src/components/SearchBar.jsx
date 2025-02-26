import React, { useState } from "react";
import "../styles/movie.css";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchValue);
    }
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Suche in KASFLIX"
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button
        onClick={handleSearchClick}
        className="search-button"
      >
        <img src="./images/Lupe.png" alt="lupe" className="lupe-icon" />
      </button>
    </div>
  );
}

export default SearchBar;