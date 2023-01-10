const selectedShape = ({ state, setState,
	data: { color, shape, size, id }}) => setState({
	...state,
	currentShape: { color, shape, size, id },
});

export default selectedShape;
