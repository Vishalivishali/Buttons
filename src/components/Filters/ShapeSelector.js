import React from 'react';

const Shapes = (context) => {
	const { config: { filters: { shapes }}} = context;

	return shapes.map((shape, key) =>
		<option key={ key } value={ shape }>{shape}</option>);
};

const ShapeSelector = (context) => {
	const { state, setState } = context;
	const { filters } = state;

	return (
		<select
			value={ filters.shape }
			onChange={ (event) => setState({ ...state,
				filters:
		{ ...filters, shape: event.target.value }}) }
		>
			<Shapes { ...context }/>
		</select>);
};

export default ShapeSelector;
