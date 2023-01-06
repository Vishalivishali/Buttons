import React from 'react';
import Shape from '../Shape';

const isSelectedShape = (context) => {
	const { state: { currentShape }, data: { id }} = context;

	return currentShape.id === id;
};

const ShapeSelectorBox = (context) => {
	const { state, setState, data: shape, config: { sizes }} = context;

	return (
		<div
			{
				...{ className: isSelectedShape(context)
						&& 'shapeHighlight',
				onClick: () => {
					setState({ ...state,
						currentShape: shape		});
				} } }
			style={ { width: sizes[shape.size],
				marginTop: '3%' } }
		>
			<Shape
				{ ...{ ...context, data: shape } }
			/>

		</div>);
};

export default ShapeSelectorBox;
