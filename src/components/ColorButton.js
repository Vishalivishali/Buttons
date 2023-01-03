import { React } from 'react';

const isActive = ({ state: { currentShape }, color }) =>
	color === currentShape.color && 'highlight';

const ColorButton = (context) => {
	const { state: { currentShape }, setState, color } = context;
	const { state } = context;

	return (
		<button
			{ ...{ className: isActive(context) } }
			onClick={ () => setState({ ...state,
				currentShape: { ...currentShape, color }}) }
		>
			{color}
		</button>);
};

export default ColorButton;
