
const updateShapes = ({ state }) => {
	const { currentShape } = state;

	return state.shapes.map((shape) =>
		(shape.id === currentShape.id ? currentShape : shape));
};

export default updateShapes;
