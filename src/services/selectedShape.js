const selectedShape = ({ state, setState,
	data }) => setState({
	...state,
	currentShape: data,
});

export default selectedShape;
