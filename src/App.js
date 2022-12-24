import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Shapes from './data/Shapes';

const App = (context) => {
	const [state, setState] = useState({
		currentState: {
			color: 'purple',
			shape: 'circle',
			size: 'medium',
		},
	});
	const extendedContext = { ...{ ...context, state, setState }};
	const ShapeStructures = Shapes[state.currentState.shape];

	return <div className="App">
		<Buttons { ...extendedContext }/>
		<Display { ...extendedContext }/>
		<ShapeStructures { ...extendedContext }/>
	</div>;
};

export default App;
