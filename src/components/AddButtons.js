import React from 'react';

const AddButton = (context) => {
	const { state, setState } = context;
	const { currentState, shapes } = state;

	return (
		<button onClick={ () =>
			setState({
				...state, shapes: [...shapes, currentState],
			}) }
		>Add</button>
	);
};

export default AddButton;
