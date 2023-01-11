import React from 'react';
import ShapeManager from '../../../services/shapeManager';
const Add = (context) => {
	const { state, setState } = context;
	const { shapes } = state;

	return (
		<button onClick={ () =>
			setState({
				...state,
				shapes: [...shapes,
					ShapeManager.addShape(context)],
			}) }
		>Add</button>
	);
};

export default Add;
