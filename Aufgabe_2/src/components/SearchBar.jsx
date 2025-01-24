import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="space-y-4">
      <input type="text" placeholder="Nach Karten suchen..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} 
      className="border border-gray-300 p-2 rounded-md w-full"/>
    </div>
  );
}

export default SearchBar;