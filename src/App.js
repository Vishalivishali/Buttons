/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';
import ShapeComponents from './components/ShapeComponents';
import Shape from './components/Shape';
import getCurrentState from './services/getCurrentState';
import Box from './components/Box';

const initialState = (context) => ({
	currentState: getCurrentState(context),
	shapes: [],
});
const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};
	const { selectedShape } = state;

	return <div className="App">
		<Buttons { ...extendedContext }/>
		{ selectedShape && <div className="shapeStyle">
			<Shape { ...{ ...extendedContext,
				data: selectedShape } }
			/></div> }
		<Box { ...extendedContext }/>
		<ShapeComponents { ...extendedContext }/>
		<Display { ...extendedContext }/>
	</div>;
};

export default App;
