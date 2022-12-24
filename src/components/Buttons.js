import { peek } from '@laufire/utils/debug';
import { React } from 'react';
import ShapeButton from './ShapeButton';
import ColorButton from './ColorButton';
import SizeButton from './SizeButton';

const Buttons = (context) => {
	peek(context);
	return (
		<div>
			<div><ColorButton { ...context }/></div>
			<div><ShapeButton { ...context }/></div>
			<div><SizeButton { ...context }/></div>
		</div>
	);
};

export default Buttons;
