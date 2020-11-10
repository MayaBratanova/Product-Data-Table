import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className="filterable-table-container">
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  };
}

export default FilterableProductTable;