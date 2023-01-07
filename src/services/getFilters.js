
const getFilters = (shapes, filters) =>
	shapes.filter((shape) => Object.keys(filters).every((prop) =>
		filters[prop] === 'any'
		|| shape[prop] === filters[prop]));

export default getFilters;
