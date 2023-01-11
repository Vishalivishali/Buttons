import React from 'react';
import ShapeManager from '../../../services/shapeManager';
const New = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({ ...state,
				currentShape: ShapeManager.getCurrentShape(context) }) }
		>
			NEW
		</button>);
};

export default New;
