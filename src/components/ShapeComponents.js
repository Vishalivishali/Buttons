import React from 'react';
import Shape from './Shape';

const remove = (context) => {
	const { state: { shapes }, data } = context;
	const temp = shapes.filter((shape) => shape.id !== data.id);

	return temp;
};

const ShapeComponents = (context) => {
	const { state, setState } = context;
	const { shapes } = state;

	return shapes.map((shape, key) =>
		<div
			key={ key }
			onClick={ () => {
				setState({
					...state,
					shapes: remove({ ...context, data: shape }),
				});
			} }
		>
			<Shape
				{ ...{ ...context, data: shape } }
			/>

		</div>);
};

export default ShapeComponents;
