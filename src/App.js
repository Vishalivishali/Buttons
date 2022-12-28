/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Shape from './components/Shape';
import ShapeComponents from './components/ShapeComponents';

const App = (context) => {
	const [state, setState] = useState({
		currentState: {
			color: 'purple',
			shape: 'circle',
			size: 'medium',
		},
		shapes: [],
		selectedShape: {
			color: 'purple',
			shape: 'circle',
			size: 'medium',
		},
	});

	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<Buttons { ...extendedContext }/>
		<div className="orderWise">
			<Shape { ...{ ...extendedContext,
				data: state.currentState } }
			/></div>
		<div className="shapeStyle">
			<Shape { ...{ ...extendedContext,
				data: state.selectedShape } }
			/></div>
		<Display { ...extendedContext }/>
		<ShapeComponents { ...extendedContext }/>

	</div>;
};

export default App;
