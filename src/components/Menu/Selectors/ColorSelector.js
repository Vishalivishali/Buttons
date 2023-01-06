import { React } from 'react';
import Color from '../Options/Color';

const isActive = ({ state: { currentShape }, color }) =>
	color === currentShape.color && 'highlight';

const ColorSelector = (context) => {
	const { state: { currentShape }, setState } = context;
	const { state } = context;

	return (
		<select
			{ ...{ className: isActive(context) } }
			onChange={ (event) => setState({ ...state,
				currentShape: { ...currentShape, color: event.target.value }}) }
		>
			<Color { ...context }/>
		</select>);
};

export default ColorSelector;
