import React from 'react';
import className from 'classnames';

const Checkbox = ({ checked, onChange, size }) => {
	
	const radioClasses = className("checkbox", {"large": size});

	return (
		<span className={radioClasses}>
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