import { React } from 'react';
import SizeButtons from './SizeButtons';

const isActive = ({ state: { currentShape }, size }) =>
	size === currentShape.size && 'highlight';

const SizeButton = (context) => {
	const { state: { currentShape }, setState } = context;
	const { state } = context;

	return (
		<select
			{ ...{ className: isActive(context) } }
			onCharge={ (event) => setState({ ...state,
				currentShape: { ...currentShape, size: event.target.value }}) }
		>
			<SizeButtons { ...context }/>
		</select>);
};

export default SizeButton;
