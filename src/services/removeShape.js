const removeShape = (context) => {
	const { state: { shapes, selectedShape }} = context;
	const temp = shapes.filter((shape) => shape.id !== selectedShape.id);

	return temp;
};

export default removeShape;
