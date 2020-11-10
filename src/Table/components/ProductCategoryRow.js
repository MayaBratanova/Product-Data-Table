import React from 'react';

const ProductCategoryRow = ({category}) => {

	return (
		<tr>
			<th className="product-category" colSpan="2">
				{category}
			</th>
		</tr>
	);
};

export default ProductCategoryRow;