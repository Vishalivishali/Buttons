import React from 'react';

const Colors = (context) => {
	const { config: { filters: { colors }}} = context;

	return colors.map((color, key) =>
		<option key={ key } value={ color }>{color}</option>);
};

const ColorSelector = (context) => {
	const { state, setState } = context;
	const { filteredShapes } = state;

	return (
		<select
			onChange={ (event) => setState({ ...state,
				filteredShapes:
		{ ...filteredShapes, color: event.target.value }}) }
		>
			<Colors { ...context }/>
		</select>);
};

export default ColorSelector;
