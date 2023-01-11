/* eslint-disable no-magic-numbers */
import './App.scss';
import { React, useState } from 'react';

import Filters from './components/Filters/';
import Buttons from './components/Menu/Buttons/Buttons';
import Container from './components/Container';
import ShapeManager from './services/shapeManager';
import Box from './components/Box/';
import Menu from './components/Menu/';
import { rndValue } from '@laufire/utils/random';
import { keys } from '@laufire/utils/lib';
import ShapesTypes from './data/ShapesTypes';

const initialState = ({ config: { colors, sizes }}) => ({
	currentShape: {
		color: rndValue(colors),
		shape: rndValue(keys(ShapesTypes)),
		size: rndValue(keys(sizes)),
	},
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
			? [...newState.shapes, ShapeManager.getCurrentShape(context)]
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
