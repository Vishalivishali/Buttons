import React from 'react';
import Shape from '../Shape';
import ShapeManager from '../../services/shapeManager';

const isSelectedShape = (context) => {
	const { state: { currentShape }, data: { id }} = context;

	return currentShape.id === id;
};

const ShapeSelectorBox = (context) => {
	const { data: shape, config: { sizes }} = context;

	return (
		<div
			{
				...{ className: isSelectedShape(context)
						&& 'shapeHighlight',
				onClick: () => {
					isSelectedShape(context)
						? ShapeManager.unselectedShape(context)
						: ShapeManager.selectedShape(context);
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
