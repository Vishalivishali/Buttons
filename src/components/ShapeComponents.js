/* eslint-disable max-len */
import React from 'react';
import Shape from './Shape';

const isSelectedShape = (context, shape) => {
	const { state: { currentShape }} = context;

	return currentShape.id === shape.id;
};

const ShapeComponents = (context) => {
	const { state, setState } = context;
	const { shapes } = state;

	return shapes.map((shape, key) =>
		<div
			key={ key }
			{
				...{ className: isSelectedShape(context, shape) && 'shapeHighlight',
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

export default ShapeComponents;
