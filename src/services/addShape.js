import { rndString } from '@laufire/utils/random';

const addShape = ({ state: { currentState }, config: { idLength }}) => ({
	...currentState,
	id: rndString(idLength),
});

export default addShape;
