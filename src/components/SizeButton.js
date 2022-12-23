import { React } from 'react';

const SizeButton = (context) => {
	const { setState, state, size } = context;

	return (
		<button onClick={ () => setState({ ...state, size }) }>
			{size}
		</button>
	);
};

export default SizeButton;
