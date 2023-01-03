import { React } from 'react';

const isActive = ({ state: { currentShape }, size }) =>
	size === currentShape.size && 'highlight';

const SizeButton = (context) => {
	const { state: { currentShape }, setState, size } = context;
	const { state } = context;

	return (
		<button
			{ ...{ className: isActive(context) } }
			onClick={ () => setState({ ...state,
				currentShape: { ...currentShape, size }}) }
		>
			{size}
		</button>);
};

export default SizeButton;
