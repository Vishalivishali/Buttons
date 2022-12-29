import { React } from 'react';

const getBorder = (currentState, color) =>
	(color === currentState.color ? `2px solid ${ currentState.color }` : '');

const ColorButton = ({ config: { colors }, state, setState }) => {
	const { currentState } = state;

	return colors.map((color, key) =>
		<button
			key={ key }
			style={ { border: getBorder(currentState, color) } }
			onClick={ () => setState({ ...state,
				currentState: { ...currentState, color }}) }
		>
			{color}
		</button>);
};

export default ColorButton;
