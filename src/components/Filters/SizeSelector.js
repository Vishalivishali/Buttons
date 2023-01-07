import React from 'react';

const Sizes = (context) => {
	const { config: { filters: { sizes }}} = context;

	return sizes.map((size, key) =>
		<option key={ key } value={ size }>{size}</option>);
};

const SizeSelector = (context) => {
	const { state, setState } = context;
	const { filters } = state;

	return (
		<select
			value={ filters.size }
			onChange={ (event) => setState({ ...state,
				filteredShapes:
		{ ...filters, size: event.target.value }}) }
		>
			<Sizes { ...context }/>
		</select>);
};

export default SizeSelector;
