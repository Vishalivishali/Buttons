import { keys } from '@laufire/utils/lib';
import { React } from 'react';

const getBorder = (currentShape, size) =>
	(size === currentShape.size ? `2px solid ${ currentShape.color }` : '');

const SizeButton = ({ config: { sizes }, state, setState }) => {
	const { currentShape } = state;

	return keys(sizes).map((size, key) =>
		<button
			key={ key }
			style={ { border: getBorder(currentShape, size) } }
			onClick={ () => setState({ ...state,
				currentShape: { ...currentShape, size }}) }
		>
			{size}
		</button>);
};

export default SizeButton;
