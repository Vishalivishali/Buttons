import { keys } from '@laufire/utils/lib';
import { React } from 'react';

const getBorder = (currentState, size) =>
	(size === currentState.size ? `2px solid ${ currentState.color }` : '');

const SizeButton = ({ config: { sizes }, state, setState }) => {
	const { currentState } = state;

	return keys(sizes).map((size, key) =>
		<button
			key={ key }
			style={ { border: getBorder(currentState, size) } }
			onClick={ () => setState({ ...state,
				currentState: { ...currentState, size }}) }
		>
			{size}
		</button>);
};

export default SizeButton;
