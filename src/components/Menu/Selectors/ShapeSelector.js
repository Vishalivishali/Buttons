import { React } from 'react';
import Shape from '../Options/Shape';

const isActive = ({ state: { currentShape }, shape }) =>
	shape === currentShape.shape && 'highlight';

const ShapeSelector = (context) => {
	const { state: { currentShape }, setState } = context;
	const { state } = context;

	return (
		<select
			{ ...{ className: isActive(context) } }
			onChange={ (event) => setState({ ...state,
				currentShape: { ...currentShape, shape: event.target.value }}) }
		>
			<Shape { ...context }/>
		</select>);
};

export default ShapeSelector;
