/* eslint-disable max-lines-per-function */
import React from 'react';
import isItemSelected from '../../services/isItemSelected';
import ShapeSelectorBox from './ShapeSelectorBox';

const Container = (context) => {
	const { state: { shapes }} = context;

	return <div className={ !isItemSelected(context) && 'container' }>
		{shapes.map((shape, key) =>
			<ShapeSelectorBox
				key={ key }
				{ ...{ ...context, data: shape } }
			/>)}

	</div>;
};

export default Container;
