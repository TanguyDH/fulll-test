import React from "react";
import "./style.css";
import { SearchProps } from "./props";

const Search = ({ query, setQuery }: SearchProps) => {
  // Function
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Render
  return (
    <div className="container">
      <input
        placeholder="Search input"
        className="input"
        type="text"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
