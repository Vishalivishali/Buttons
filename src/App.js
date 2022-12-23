import './App.scss';
import { React, useState } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Shapes from './data/Shapes';

const getState = () => ({
	color: 'purple',
	shape: 'circle',
	size: 'medium',
});

const App = (context) => {
	const [state, setState] = useState(getState(context));
	const extendedContext = { ...{ ...context, state, setState }};
	const ShapeStructures = Shapes[state.shape];

	return <div className="App">
		<Buttons { ...extendedContext }/>
		<Display { ...extendedContext }/>
		<ShapeStructures { ...extendedContext }/>
	</div>;
};

export default App;
