import React from 'react';

const Shapes = ({ config: { shapes }}) =>
	shapes.map((shape, key) =>
		<option key={ key } value={ shape }>{shape}</option>);

const ShapeSelector = (context) =>
	<select>
		<Shapes { ...context }/>
	</select>;

export default ShapeSelector;
