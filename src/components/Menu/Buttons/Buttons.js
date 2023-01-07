import { React } from 'react';
import Add from './Add';
import Delete from './Delete';
import New from './New';
import Update from './Update';
import Random from './Random';

const Buttons = (context) =>
	<div className="buttons">
		<Add { ...context }/>
		<Delete { ...context }/>
		<New { ...context }/>
		<Update { ...context }/>
		<Random { ...context }/>
	</div>
	;

export default Buttons;
