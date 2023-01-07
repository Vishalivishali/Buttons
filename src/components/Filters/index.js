import React from 'react';
import ColorSelector from './ColorSelector';
import ShapeSelector from './ShapeSelector';
import SizeSelector from './SizeSelector';

const Filters = (context) =>
	<div className="filterShape">
		<ColorSelector { ...context }/>
		<ShapeSelector { ...context }/>
		<SizeSelector { ...context }/>
	</div>;

export default Filters;
