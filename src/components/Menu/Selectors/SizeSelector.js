import { React } from 'react';
import Size from '../Options/Size';

const isActive = ({ state: { currentShape }, size }) =>
	size === currentShape.size && 'highlight';

const SizeSelector = (context) => {
	const { state: { currentShape }, setState } = context;
	const { state } = context;

	return (
		<select
			{ ...{ className: isActive(context) } }
			onChange={ (event) => setState({ ...state,
				currentShape: { ...currentShape, size: event.target.value }}) }
		>
			<Size { ...context }/>
		</select>);
};

export default SizeSelector;
