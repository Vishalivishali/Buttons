import { rndString } from '@laufire/utils/random';

const addShape = ({ state, config }) => {
	const { currentShape } = state;
	const { idLength } = config;

	return { ...currentShape,
		id: rndString(idLength) };
};

export default addShape;
