import { React } from 'react';
import Shapes from '../data/Shapes';
import { keys } from '@laufire/utils/lib';

const getBorder = (currentShape, shape) =>
	(shape === currentShape.shape ? `2px solid ${ currentShape.color }` : ' ');

const ShapeButton = ({ state, setState }) => {
	const { currentShape } = state;

	return keys(Shapes).map((shape, key) =>
		<button
			key={ key }
			style={ { border: getBorder(currentShape, shape) } }
			onClick={ () => setState({ ...state,
				currentShape: { ...currentShape, shape }}) }
		>
			{shape}
		</button>);
};

export default ShapeButton;
