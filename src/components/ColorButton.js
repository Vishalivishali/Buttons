import { React } from 'react';
import ColorButtons from './ColorButtons';

const isActive = ({ state: { currentShape }, color }) =>
	color === currentShape.color && 'highlight';

const ColorButton = (context) => {
	const { state: { currentShape }, setState } = context;
	const { state } = context;

	return (
		<select
			{ ...{ className: isActive(context) } }
			onChange={ (event) => setState({ ...state,
				currentShape: { ...currentShape, color: event.target.value }}) }
		>
			<ColorButtons { ...context }/>
		</select>);
};

export default ColorButton;
