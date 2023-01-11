/* eslint-disable max-lines-per-function */
import React from 'react';
import ShapeManager from '../../services/shapeManager';
import ShapeSelectorBox from './ShapeSelectorBox';

const Container = (context) => {
	const { state: { shapes, filters }} = context;
	const filteres = ShapeManager.getFilters(shapes, filters);

	return <div className="container">
		{filteres.map((shape, key) =>
			<ShapeSelectorBox
				key={ key }
				{ ...{ ...context, data: shape } }
			/>)}
	</div>;
};

export default Container;
