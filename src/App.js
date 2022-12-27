/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';
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

	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<Buttons { ...extendedContext }/>
		<Display { ...extendedContext }/>
		<div className="orderWise">
			<Shape { ...{ ...extendedContext,
				data: state.currentState } }
			/>
		</div>
		{state.shapes.map((shape, key) =>
			<Shape key={ key } { ...{ ...extendedContext, data: shape } }/>)}
	</div>;
};

export default App;
