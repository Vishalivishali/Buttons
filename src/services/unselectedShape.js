const unselectedShape = ({ state, setState,
	data }) => setState({
	...state,
	currentShape: { ...data,
		id: '' },
});

export default unselectedShape;
