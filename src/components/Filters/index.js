import React from 'react';
import ColorFilterButton from './ColorFilterButton';

const Filters = (context) =>
	<div className="filterShape">
		<ColorFilterButton { ...context }/>
	</div>;

export default Filters;
