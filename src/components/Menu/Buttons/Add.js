import React from 'react';
import addShape from '../../../services/addShape';

const Add = (context) => {
	const { state, setState } = context;
	const { shapes } = state;

	return (
		<button onClick={ () =>
			setState({
				...state,
				currentShape: addShape(context),
				shapes: [...shapes, addShape(context)],
			}) }
		>Add</button>
	);
};

export default Add;
