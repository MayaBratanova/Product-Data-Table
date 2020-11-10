import React from 'react';

const Checkbox = ({ checked, onChange }) => {
	return (
		<span className="checkbox">
			<input 
				type="checkbox" 
				name="checkbox" 
				id="checkbox-id" 
				checked={checked}
				onChange={(e => onChange(e.target.checked))}
			/>
			<label htmlFor="checkbox-id">Only show products in stock</label>
		</span>
	);
}

export default Checkbox;