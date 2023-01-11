import { keys } from '@laufire/utils/collection';
import { rndString, rndValue } from '@laufire/utils/random';
import ShapesTypes from '../data/ShapesTypes';

const addShape = ({ state: { currentShape }, config: { idLength }}) =>
	({ ...currentShape,
		id: rndString(idLength) });

const getCurrentShape = ({ config: { colors, sizes, idLength }}) => (
	{
		color: rndValue(colors),
		shape: rndValue(keys(ShapesTypes)),
		size: rndValue(keys(sizes)),
		id: rndString(idLength),
	});

const getFilters = (shapes, filters) =>
	shapes.filter((shape) => Object.keys(filters).every((prop) =>
		filters[prop] === 'any'
		|| shape[prop] === filters[prop]));

const isItemSelected = ({ state: { currentShape: { id }}}) => !id;

const removeShape = ({ state: { shapes, currentShape }}) =>
	shapes.filter((shape) => shape.id !== currentShape.id);

const updateShapes = ({ state }) => {
	const { currentShape } = state;

	return state.shapes.map((shape) =>
		(shape.id === currentShape.id ? currentShape : shape));
};

const selectedShape = ({ state, setState,
	data }) => setState({
	...state,
	currentShape: data,
});

const unselectedShape = ({ state, setState,
	data }) => setState({
	...state,
	currentShape: { ...data,
		id: null },
});

const ShapeManager = {
	addShape,
	getCurrentShape,
	getFilters,
	isItemSelected,
	removeShape,
	updateShapes,
	selectedShape,
	unselectedShape,
};

export default ShapeManager;
