import React from 'react';

const SearchBar = ({ filterText, onSearchChange }) => {

  return (
    <div className="text">
      <input type="text" placeholder="Search" value={filterText}
        onChange={event => onSearchChange(event.target.value)} />
    </div>
  );
};

export default SearchBar;