import { peek } from '@laufire/utils/debug';
import { React } from 'react';
import ColorButtons from './ColorButtons';
import ShapeButtons from './ShapeButtons';
import SizeButtons from './SizeButtons';

const Buttons = (context) => {
	peek(context);
	return (
		<div>
			<div><ColorButtons { ...context }/></div>
			<div><ShapeButtons { ...context }/></div>
			<div><SizeButtons { ...context }/></div>
		</div>
	);
};

export default Buttons;
