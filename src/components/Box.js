import React from 'react';
import Shape from './Shape';

const Box = (context) => {
	const { state: { currentState }} = context;

	return <div className="box">
		<div className="orderWise">
			<Shape { ...{ ...context,
				data: currentState } }
			/>
		</div>
	</div>;
};

export default Box;
