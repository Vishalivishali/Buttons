import { keys } from '@laufire/utils/collection';
import { rndString, rndValue } from '@laufire/utils/random';
import Shapes from '../data/ShapesTypes';

const getCurrentShape = ({ config: { colors, sizes, idLength }}) => (
	{
		color: rndValue(colors),
		shape: rndValue(keys(Shapes)),
		size: rndValue(keys(sizes)),
		id: rndString(idLength),
	});

export default getCurrentShape;
