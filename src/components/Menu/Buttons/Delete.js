import React from 'react';
import ShapeManager from '../../../services/shapeManager';
const Delete = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ ShapeManager.isItemSelected(context) }
			onClick={ () =>
				setState({
					...state,
					currentShape: ShapeManager.getCurrentShape(context),
					shapes: ShapeManager.removeShape(context),
				}) }
		>DELETE</button>
	);
};

export default Delete;
