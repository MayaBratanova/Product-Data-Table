import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';

const Table = ({ title, size, tableHead, products }) => {
  return (
    <FilterableProductTable products={products} title={title} size={size} tableHead={tableHead} />
  )
}

Table.defaultProps = {
  title: "No Title",
  tableHead: ["Name", "Price"],
  products: [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Ball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ],
};

export default Table;