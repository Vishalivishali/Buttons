/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';
import ShapeComponents from './components/ShapeComponents';
import Shape from './components/Shape';

const App = (context) => {
	const [state, setState] = useState({
		currentState: {
			color: 'purple',
			shape: 'circle',
			size: 'medium',
		},
		shapes: [],
	});

	const { currentState, selectedShape } = state;

	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<Buttons { ...extendedContext }/>
		<div className="orderWise">
			<Shape { ...{ ...extendedContext,
				data: currentState } }
			/></div>
		{ selectedShape && <div className="shapeStyle">
			<Shape { ...{ ...extendedContext,
				data: selectedShape } }
			/></div> }
		<ShapeComponents { ...extendedContext }/>
		<Display { ...extendedContext }/>
	</div>;
};

export default App;
