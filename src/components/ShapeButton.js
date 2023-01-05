import { React } from 'react';
import ShapeButtons from './ShapeButtons';

const isActive = ({ state: { currentShape }, shape }) =>
	shape === currentShape.shape && 'highlight';

const ShapeButton = (context) => {
	const { state: { currentShape }, setState } = context;
	const { state } = context;

	return (
		<select
			{ ...{ className: isActive(context) } }
			onCharge={ (event) => setState({ ...state,
				currentShape: { ...currentShape, shape: event.target.value }}) }
		>
			<ShapeButtons { ...context }/>
		</select>);
};

export default ShapeButton;
