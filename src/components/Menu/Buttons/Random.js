import { rndValue } from '@laufire/utils/random';
import React from 'react';

const Random = (context) => {
	const { state: { shapes }, setState, state } = context;

	return (
		<button
			onClick={ () => setState({ ...state,
				currentShape: rndValue(shapes) }) }
		>
			RndButton
		</button>);
};

export default Random;
