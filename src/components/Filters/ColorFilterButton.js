import React from 'react';

const Colors = ({ config: { colors }}) =>
	colors.map((color, key) =>
		<option key={ key } value={ color }>{color}</option>);

const ColorSelector = (context) =>
	<select>
		<Colors { ...context }/>
	</select>;

export default ColorSelector;
