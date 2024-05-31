import './SearchBar.css';
import React, { useState } from 'react';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    // Pass the search query to the parent component
    props.onSearch(searchTerm.toLowerCase());
  };

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={searchHandler}>
        {/* Use a label for accessibility */}
        <label className="search-label" htmlFor="search">
          Search titles
        </label>
        {/* Input field for search */}
        <input
          className="search-input"
          type="text"
          id="search"
          value={searchTerm} // Bind the input value to the state
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {/* Submit button */}
        <button className="search-submit" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}