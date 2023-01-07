import { React } from 'react';
import Colors from '../Options/Colors';

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
			<Colors { ...context }/>
		</select>);
};

export default ColorSelector;
