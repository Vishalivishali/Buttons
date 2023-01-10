const unselectedShape = ({ state, setState,
	data: { color, shape, size }}) => setState({
	...state,
	currentShape: { color, shape, size },
});

export default unselectedShape;
