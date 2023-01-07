import { keys } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import Shapes from '../data/ShapesTypes';

const getCurrentShape = ({ config: { colors, sizes }}) => (
	{
		color: rndValue(colors),
		shape: rndValue(keys(Shapes)),
		size: rndValue(keys(sizes)),
	});

export default getCurrentShape;
