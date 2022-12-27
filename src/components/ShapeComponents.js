import React from 'react';
import Shape from './Shape';

const ShapeComponents = (context) => {
	const { shapes } = context;

	return shapes.map((shape, key) =>
		<Shape key={ key } { ...{ ...context, data: shape } }/>);
};

export default ShapeComponents;
