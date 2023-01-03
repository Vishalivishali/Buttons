import { React } from 'react';

const isActive = ({ state: { currentShape }, shape }) =>
	shape === currentShape.shape && 'highlight';

const ShapeButton = (context) => {
	const { state: { currentShape }, setState, shape } = context;
	const { state } = context;

	return (
		<button
			{ ...{ className: isActive(context) } }
			onClick={ () => setState({ ...state,
				currentShape: { ...currentShape, shape }}) }
		>
			{shape}
		</button>);
};

export default ShapeButton;
