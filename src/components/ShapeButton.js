import { React } from 'react';
import Shapes from '../data/Shapes';
import { keys } from '@laufire/utils/lib';

const ShapeButton = ({ state, setState }) => {
	const { currentState } = state;

	return keys(Shapes).map((shape, key) =>
		<button
			key={ key }
			onClick={ () => setState({ ...state,
				currentState: { ...currentState, shape }}) }
		>
			{shape}
		</button>);
};

export default ShapeButton;
