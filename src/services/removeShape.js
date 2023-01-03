const removeShape = (context) => {
	const { state: { shapes, currentShape }} = context;
	const temp = shapes.filter((shape) => shape.id !== currentShape.id);

	return temp;
};

export default removeShape;
