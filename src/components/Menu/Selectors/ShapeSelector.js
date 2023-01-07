import { React } from 'react';
import Shapes from '../Options/Shapes';

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
			<Shapes { ...context }/>
		</select>);
};

export default ShapeSelector;
