/* eslint-disable max-lines-per-function */
import React from 'react';
import getFilteredShape from '../../services/getFilteredShapes';
import isItemSelected from '../../services/isItemSelected';
import ShapeSelectorBox from './ShapeSelectorBox';

const Container = (context) => {
	const { state: { shapes, filteredShapes }} = context;
	const filters = getFilteredShape(shapes, filteredShapes);

	return <div className={ !isItemSelected(context) && 'container' }>
		{filters.map((shape, key) =>
			<ShapeSelectorBox
				key={ key }
				{ ...{ ...context, data: shape } }
			/>)}
	</div>;
};

export default Container;
