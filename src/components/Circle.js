import { React } from 'react';

const Circle = (context) => {
	const { state: { currentState: { size, color }},
		config: { sizes }} = context;

	return (
		<div
			className="circle shape"
			style={ { height: `${ sizes[size] }px`,
				width: `${ sizes[size] }px`,
				backgroundColor: color } }
		/>
	);
};

export default Circle;
