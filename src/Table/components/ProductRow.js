import React from 'react';
import className from 'classnames';

const ProductRow = ({ product }) => {
  const productClass = className("product-name", { 'out-of-stock': !product.stocked })

  return (
    <tr>
      <td className={productClass}>{product.name}{!product.stocked && " - out of stock"}</td>
      <td className="product-price">{product.price}</td>
    </tr>
  )
}

export default ProductRow;