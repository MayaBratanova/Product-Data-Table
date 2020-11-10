import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="filterable-search-bar">
        <div className="text">
          <input type="text" placeholder="Search"/>
        </div>
        <span className="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox-id" />
          <label htmlFor="checkbox-id">Only show products in stock</label>
        </span>
      </form>
    );
  };
};

export default SearchBar;