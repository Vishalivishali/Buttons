import { peek } from '@laufire/utils/debug';
import { React } from 'react';
import ShapeButtons from './ShapeButtons';
import ColorButtons from './ColorButtons';
import SizeButtons from './SizeButtons';
import AddButton from './AddButtons';
import DeleteButton from './DeleteButton';
import New from './New';
import UpdateButton from './UpdateButton';

const Buttons = (context) => {
	peek(context);
	return (
		<div className="buttons">
			<div><ColorButtons { ...context }/></div>
			<div><ShapeButtons { ...context }/></div>
			<div><SizeButtons { ...context }/></div>
			<div><AddButton { ...context }/></div>
			<div><DeleteButton { ...context }/></div>
			<div><New { ...context }/></div>
			<div><UpdateButton { ...context }/></div>
		</div>
	);
};

export default Buttons;
