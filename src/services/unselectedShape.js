const unselectedShape = ({ state, setState,
	data }) => setState({
	...state,
	currentShape: { ...data,
		id: null },
});

export default unselectedShape;
