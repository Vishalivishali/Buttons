import { React } from 'react';
import Add from './Add';
import Delete from './Delete';
import New from './New';
import Update from './Update';
import Random from './Random';

const Buttons = (context) =>
	<div className="buttons">
		<div><Add { ...context }/></div>
		<div><Delete { ...context }/></div>
		<div><New { ...context }/></div>
		<div><Update { ...context }/></div>
		<div><Random { ...context }/></div>
	</div>
	;

export default Buttons;
