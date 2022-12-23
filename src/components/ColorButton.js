import { React } from 'react';

const ColorButton = (context) => {
	const { setState, state, color } = context;

	return (
		<button onClick={ () => setState({ ...state, color }) }>
			{color}
		</button>
	);
};

export default ColorButton;
