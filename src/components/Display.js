import { React } from 'react';

const Display = ({ state: { currentState: { color, shape, size }}}) =>
	<div>
		<span>{size}</span>
		<span>{color}</span>
		<span>{shape}</span>
	</div>;

export default Display;
