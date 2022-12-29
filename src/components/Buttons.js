import { peek } from '@laufire/utils/debug';
import { React } from 'react';
import ShapeButton from './ShapeButton';
import ColorButton from './ColorButton';
import SizeButton from './SizeButton';
import AddButton from './AddButtons';
import DeleteButton from './DeleteButton';

const Buttons = (context) => {
	peek(context);
	return (
		<div className="buttons">
			<div><ColorButton { ...context }/></div>
			<div><ShapeButton { ...context }/></div>
			<div><SizeButton { ...context }/></div>
			<div><AddButton { ...context }/></div>
			<div><DeleteButton { ...context }/></div>
		</div>
	);
};

export default Buttons;
