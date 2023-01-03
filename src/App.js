/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import ShapeComponents from './components/ShapeComponents';
import getcurrentShape from './services/getcurrentShape';
import Box from './components/Box';

const initialState = (context) => ({
	currentShape: getcurrentShape(context),
	shapes: [],
});
const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<Buttons { ...extendedContext }/>
		<Box { ...extendedContext }/>
		<ShapeComponents { ...extendedContext }/>
	</div>;
};

export default App;
