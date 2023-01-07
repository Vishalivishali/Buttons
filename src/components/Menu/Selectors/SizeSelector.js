import { React } from 'react';
import Sizes from '../Options/Sizes';

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
			<Sizes { ...context }/>
		</select>);
};

export default SizeSelector;
