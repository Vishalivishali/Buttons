import { React } from 'react';
const ShapeButton = (context) => {
	const { setState, state, shape } = context;

	return (
		<button onClick={ () => setState({ ...state, shape }) }>
			{shape}
		</button>
	);
};

export default ShapeButton;
