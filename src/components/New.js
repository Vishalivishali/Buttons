import React from 'react';
import getCurrentState from '../services/getCurrentState';

const New = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({ ...state,
				currentState: getCurrentState(context) }) }
		>
			NEW
		</button>);
};

export default New;
