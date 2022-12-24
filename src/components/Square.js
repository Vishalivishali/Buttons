import { React } from 'react';

const Square = (context) => {
	const { data: { size, color },
		config: { sizes }} = context;

	return (
		<div
			className="shape"
			style={ { height: `${ sizes[size] }px`,
				width: `${ sizes[size] }px`,
				backgroundColor: color } }
		/>
	);
};

export default Square;
