import { rndString } from '@laufire/utils/random';

const addShape = ({ state, config }) => {
	const { currentState } = state;
	const { idLength } = config;

	return { ...currentState,
		id: rndString(idLength) };
};

export default addShape;
