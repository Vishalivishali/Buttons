import { keys } from '@laufire/utils/lib';
import { React } from 'react';

const SizeButton = ({ config: { sizes }, state, setState }) => {
	const { currentState } = state;

	return keys(sizes).map((size, key) =>
		<button
			key={ key }
			onClick={ () => setState({
				currentState: { ...currentState, size },
			}) }
		>
			{size}
		</button>);
};

export default SizeButton;
