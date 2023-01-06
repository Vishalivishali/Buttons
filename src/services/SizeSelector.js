import React from 'react';

const Sizes = ({ config: { shapes: sizes }}) =>
	sizes.map((size, key) =>
		<option key={ key } value={ size }>{size}</option>);

const SizeSelector = (context) =>
	<select>
		<Sizes { ...context }/>
	</select>;

export default SizeSelector;
