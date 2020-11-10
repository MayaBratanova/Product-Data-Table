import React from 'react';

class ProductCategoryRow extends React.Component {
	render() {
		// conts category = this.props.category;

		return (
			<tr>
				<th className="product-category" colSpan="2">
					{this.props.category}
				</th>
			</tr>
		);
	};
};

export default ProductCategoryRow;