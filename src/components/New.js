import React from 'react';
import getcurrentShape from '../services/getcurrentShape';

const New = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({ ...state,
				currentShape: getcurrentShape(context) }) }
		>
			NEW
		</button>);
};

export default New;
