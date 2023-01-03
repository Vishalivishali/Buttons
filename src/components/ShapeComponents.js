import React from 'react';
import Shape from './Shape';

const ShapeComponents = (context) => {
	const { state, setState } = context;
	const { shapes } = state;

	return shapes.map((shape, key) =>
		<div
			key={ key }
			onClick={ () => {
				setState({
					...state,
					currentShape: shape,
				});
			} }
		>
			<Shape
				{ ...{ ...context, data: shape } }
			/>

		</div>);
};

export default ShapeComponents;
