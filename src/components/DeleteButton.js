import React from 'react';
import removeShape from '../services/removeShape';

const DeleteButton = (context) => {
	const { state, setState } = context;

	return (
		<button onClick={ () =>
			setState({
				...state, shapes: removeShape(context),
			}) }
		>DELETE</button>
	);
};

export default DeleteButton;
