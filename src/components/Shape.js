import React from 'react';
import Shapes from '../data/ShapesTypes';

const Shape = (context) => {
	const { data: { shape }} = context;
	const Component = Shapes[shape];

	return <Component { ...context }/>;
};

export default Shape;
