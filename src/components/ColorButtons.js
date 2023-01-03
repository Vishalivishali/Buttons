import React from 'react';
import ColorButton from './ColorButton';

const ColorButtons = (context) => {
	const { config: { colors }} = context;

	return colors.map((color, key) =>
		<ColorButton
			key={ key }
			{ ...{ ...context, color } }
		/>);
};

export default ColorButtons;
