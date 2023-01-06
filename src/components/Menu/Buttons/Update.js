import React from 'react';
import isItemSelected from '../../../services/isItemSelected';
import updateShapes from '../../../services/updateShapes';

const Update = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ isItemSelected(context) }
			onClick={ () => setState({ ...state,
				shapes: updateShapes(context) }) }
		>
			Update
		</button>);
};

export default Update;
