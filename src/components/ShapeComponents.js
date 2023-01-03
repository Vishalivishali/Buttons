/* eslint-disable max-lines-per-function */
import React from 'react';
import isItemSelected from '../services/isItemSelected';
import ShapeComponent from './ShapeComponent';

const ShapeComponents = (context) => {
	const { state: { shapes }} = context;

	return <div className={ !isItemSelected(context) && 'container' }>
		{shapes.map((shape, key) =>
			<ShapeComponent
				key={ key }
				{ ...{ ...context, data: shape } }
			/>)}

	</div>;
};

export default ShapeComponents;
