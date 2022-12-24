import { React } from 'react';

const ColorButton = ({ config: { colors }, state, setState }) => {
	const { currentState } = state;

	return colors.map((color, key) =>
		<button
			key={ key }
			onClick={ () => setState({ ...state,
				currentState: { ...currentState, color }}) }
		>
			{color}
		</button>);
};

export default ColorButton;
