import React from 'react';
import removeShape from '../services/removeShape';
import isItemSelected from '../services/isItemSelected';

const DeleteButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			disabled={ isItemSelected(context) }
			onClick={ () =>
				setState({
					...state, shapes: removeShape(context),
				}) }
		>DELETE</button>
	);
};

export default DeleteButton;
