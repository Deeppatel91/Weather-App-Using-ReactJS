import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import "../index.css";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
