import React from "react";

function SearchBar({ setSearchInput }) {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="border w-1/4 p-2 mt-5 mx-2"
        onChange={(e) => setSearchInput((prev) => e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
