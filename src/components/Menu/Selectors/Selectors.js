import React from 'react';
import ColorSelector from './ColorSelector';
import ShapeSelector from './ShapeSelector';
import SizeSelector from './SizeSelector';
const Selectors = (context) =>
	<div className="button">
		<ColorSelector { ...context }/>
		<ShapeSelector { ...context }/>
		<SizeSelector { ...context }/>
	</div>;

export default Selectors;
