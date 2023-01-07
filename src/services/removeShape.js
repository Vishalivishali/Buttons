const removeShape = ({ state: { shapes, currentShape }}) =>
	shapes.filter((shape) => shape.id !== currentShape.id);

export default removeShape;
