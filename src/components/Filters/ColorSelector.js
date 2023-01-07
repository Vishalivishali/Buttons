import React from 'react';

const Colors = (context) => {
	const { config: { filters: { colors }}} = context;

	return colors.map((color, key) =>
		<option key={ key } value={ color }>{color}</option>);
};

const ColorSelector = (context) => {
	const { state, setState } = context;
	const { filters } = state;

	return (
		<select
			value={ filters.color }
			onChange={ (event) => setState({ ...state,
				filteredShapes:
		{ ...filters, color: event.target.value }}) }
		>
			<Colors { ...context }/>
		</select>);
};

export default ColorSelector;
