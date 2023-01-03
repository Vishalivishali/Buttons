/* eslint-disable max-lines-per-function */
import React from 'react';
import ShapeComponent from './ShapeComponent';

const ShapeComponents = (context) => {
	const { state: { shapes }} = context;

	return <div className="container">
		{shapes.map((shape, key) =>
			<ShapeComponent
				key={ key }
				{ ...{ ...context, data: shape } }
			/>)}

	</div>;
};

export default ShapeComponents;
