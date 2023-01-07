import React from 'react';

const Sizes = (context) => {
	const { config: { filters: { sizes }}} = context;

	return sizes.map((size, key) =>
		<option key={ key } value={ size }>{size}</option>);
};

const SizeSelector = (context) => {
	const { state, setState } = context;
	const { filteredShapes } = state;

	return (
		<select
			value={ filteredShapes.size }
			onChange={ (event) => setState({ ...state,
				filteredShapes:
		{ ...filteredShapes, size: event.target.value }}) }
		>
			<Sizes { ...context }/>
		</select>);
};

export default SizeSelector;
