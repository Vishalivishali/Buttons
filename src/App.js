/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Shape from './components/Shape';
import Shapes from './data/Shapes';

const App = (context) => {
	const [state, setState] = useState({
		currentState: {
			color: 'red',
			shape: 'circle',
			size: 'medium',
		},
		shapes: [{
			type: 'circle',
			size: 'medium',
			color: 'orange',
		},
		{
			type: 'square',
			size: 'small',
			color: 'skyblue',
		}],
	});
	const extendedContext = { ...{ ...context, state, setState }};
	const ShapeStructures = Shapes[state.currentState.shape];

	return <div className="App">
		<Buttons { ...extendedContext }/>
		<Display { ...extendedContext }/>
		<ShapeStructures { ...extendedContext }/>
		<Shape { ...{ ...extendedContext, data: state.currentState } }/>
	</div>;
};

export default App;
