import { React } from 'react';

const getBorder = (currentShape, color) =>
	(color === currentShape.color ? `2px solid ${ currentShape.color }` : '');

const ColorButton = ({ config: { colors }, state, setState }) => {
	const { currentShape } = state;

	return colors.map((color, key) =>
		<button
			key={ key }
			style={ { border: getBorder(currentShape, color) } }
			onClick={ () => setState({ ...state,
				currentShape: { ...currentShape, color }}) }
		>
			{color}
		</button>);
};

export default ColorButton;
