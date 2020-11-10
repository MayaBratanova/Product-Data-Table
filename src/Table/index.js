import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';

const productsData = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Luxury", price: "$9999.99", stocked: true, name: "Ball"},
  {category: "Normal", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Comfort good", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Necessity good", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class Table extends React.Component {
  render() {
    return (
      <FilterableProductTable products={productsData} />
    )
  }
}

export default Table;