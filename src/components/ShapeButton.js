import { React } from 'react';
import Shapes from '../data/Shapes';
import { keys } from '@laufire/utils/lib';

const getBorder = (currentState, shape) =>
	(shape === currentState.shape ? `2px solid ${ currentState.color }` : ' ');

const ShapeButton = ({ state, setState }) => {
	const { currentState } = state;

	return keys(Shapes).map((shape, key) =>
		<button
			key={ key }
			style={ { border: getBorder(currentState, shape) } }
			onClick={ () => setState({ ...state,
				currentState: { ...currentState, shape }}) }
		>
			{shape}
		</button>);
};

export default ShapeButton;
