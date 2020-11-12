import React, {useState} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Checkbox from './Checkbox';

const FilterableProductTable = ({ products, title, size, tableHead }) => {
  const [filterText, setFilterText] = useState('');
  const [inStock, setInStock] = useState(false);
  
  return (
    <div className="filterable-table-container">
      {title && <h1>{title}</h1>}
      <form className="filterable-search-bar">
        <SearchBar  
          filterText={filterText}
          onSearchChange={setFilterText}
        />
        <Checkbox   
          checked={inStock}
          onChange={setInStock}
          size={size}
        />
      </form>
      <ProductTable products={products} filterText={filterText} inStock={inStock} tableHead={tableHead} />
    </div>
  );
}

export default FilterableProductTable;