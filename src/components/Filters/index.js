import React from 'react';
import ColorSelector from './ColorSelector';
import ShapeSelector from './ShapeSelector';
import SizeSelector from './SizeSelector';

const Filters = (context) =>
	<div className="filterShape">
		<label>Colors</label><ColorSelector { ...context }/>
		<label>Shapes</label><ShapeSelector { ...context }/>
		<label>Sizes</label><SizeSelector { ...context }/>
	</div>;

export default Filters;
