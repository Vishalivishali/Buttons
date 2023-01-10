import React from 'react';
import removeShape from '../../../services/removeShape';
import isItemSelected from '../../../services/isItemSelected';
import getCurrentShape from '../../../services/getCurrentShape';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ isItemSelected(context) }
			onClick={ () =>
				setState({
					...state,
					currentShape: getCurrentShape(context),
					shapes: removeShape(context),
				}) }
		>DELETE</button>
	);
};

export default Delete;
