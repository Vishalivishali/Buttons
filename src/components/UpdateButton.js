import React from 'react';
import updateShapes from '../services/updateShapes';

const UpdateButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({ ...state,
				shapes: updateShapes(context) }) }
		>
			Update
		</button>);
};

export default UpdateButton;
