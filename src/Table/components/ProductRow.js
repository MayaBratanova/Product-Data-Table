import React from 'react';

class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td className="product-name">{this.props.name}</td>
        <td className="product-price">{this.props.price}</td>
      </tr>
    )
  }
}

export default ProductRow;