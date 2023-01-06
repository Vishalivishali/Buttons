
const getFilteredShape = (shapes, filteredShapes) =>
	shapes.filter((shape) => Object.keys(filteredShapes).every((prop) =>
		filteredShapes[prop] === 'any'
		|| shape[prop] === filteredShapes[prop]));

export default getFilteredShape;
