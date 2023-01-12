import React from 'react';
import ShapeManager from '../../../services/ShapeManager';
const Delete = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ ShapeManager.isItemSelected(context) }
			onClick={ () =>
				setState({
					...state,
					currentShape: ShapeManager.getRndShapeWithId(context),
					shapes: ShapeManager.removeShape(context),
				}) }
		>DELETE</button>
	);
};

export default Delete;
