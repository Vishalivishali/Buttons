import React from 'react';

const Shape = (context) => {
	const { data: { color, shape, size }} = context;

	return <div>{color}{shape}{size}</div>;
};

export default Shape;
