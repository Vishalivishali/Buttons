/* eslint-disable max-lines-per-function */
import React from 'react';
import getFilters from '../../services/getFilters';
import ShapeSelectorBox from './ShapeSelectorBox';

const Container = (context) => {
	const { state: { shapes, filters }} = context;
	const filteres = getFilters(shapes, filters);

	return <div className="container">
		{filteres.map((shape, key) =>
			<ShapeSelectorBox
				key={ key }
				{ ...{ ...context, data: shape } }
			/>)}
	</div>;
};

export default Container;
