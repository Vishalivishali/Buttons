import React from 'react';
import Shapes from '../data/Shapes';

const Shape = (context) => {
	const { data: { type }} = context;
	const Component = Shapes[type];

	return <Component { ...context }/>;
};

export default Shape;
