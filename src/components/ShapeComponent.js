import React from 'react';
import Shape from './Shape';

const isSelectedShape = (context) => {
	const { state: { currentShape }, data: { id }} = context;

	return currentShape.id === id;
};

const ShapeComponent = (context) => {
	const { state, setState, data: shape } = context;

	return (
		<div {
			...{ className: isSelectedShape(context)
						&& 'shapeHighlight',
			onClick: () => {
				setState({
					...state,
					currentShape: shape,
				});
			} } }
		>
			<Shape
				{ ...{ ...context, data: shape } }
			/>

		</div>);
};

export default ShapeComponent;
