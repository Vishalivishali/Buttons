import { rndString } from '@laufire/utils/random';

const addShape = ({ state: { currentShape }, config: { idLength }}) =>
	({ ...currentShape,
		id: rndString(idLength) });

export default addShape;
