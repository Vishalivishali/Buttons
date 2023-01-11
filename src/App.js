/* eslint-disable no-magic-numbers */
import './App.scss';
import { React, useState } from 'react';

import Filters from './components/Filters/';
import Buttons from './components/Menu/Buttons/Buttons';
import Container from './components/Container';
import getCurrentShape from './services/getCurrentShape';
import Box from './components/Box/';
import Menu from './components/Menu/';

const initialState = (context) => ({
	currentShape: getCurrentShape(context),
	shapes: [],
	filters: {
		color: 'any',
		size: 'any',
		shape: 'any',
	},
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};
	const { once } = context;
	const milliSeconds = 3000;

	once(() => setInterval(() => setState((newState) => ({
		...newState, shapes: newState.shapes.length < 5
			? [...newState.shapes, getCurrentShape(context)]
			: newState.shapes,
	})), milliSeconds));

	return <div className="App">

		<Buttons { ...extendedContext }/>
		<Box { ...extendedContext }/>
		<Container { ...extendedContext }/>
		<Filters { ...extendedContext }/>
		<Menu { ...extendedContext }/>
	</div>;
};

export default App;
