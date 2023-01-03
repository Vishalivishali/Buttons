import React from 'react';
import Shape from './Shape';

const Box = (context) => {
	const { state: { currentShape }} = context;

	return <div className="box">
		<div className="orderWise">
			<Shape { ...{ ...context,
				data: currentShape } }
			/>
		</div>
	</div>;
};

export default Box;
