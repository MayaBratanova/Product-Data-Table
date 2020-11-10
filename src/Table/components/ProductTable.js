import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    const products = this.props.products;

    return (
      <table className="filterable-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <>
              <ProductCategoryRow category={product.category} key={product.category} />
              <ProductRow name={product.name} price={product.price} key={product.name}/>
            </>
          ))}
        </tbody>
      </table>
    );
  };
};

export default ProductTable;