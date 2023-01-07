import React from 'react';

const Shapes = (context) => {
	const { config: { filters: { shapes }}} = context;

	return shapes.map((shape, key) =>
		<option key={ key } value={ shape }>{shape}</option>);
};

const ShapeSelector = (context) => {
	const { state, setState } = context;
	const { filteredShapes } = state;

	return (
		<select
			onChange={ (event) => setState({ ...state,
				filteredShapes:
		{ ...filteredShapes, shape: event.target.value }}) }
		>
			<Shapes { ...context }/>
		</select>);
};

export default ShapeSelector;
