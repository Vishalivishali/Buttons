import { React } from 'react';
import ShapeButton from './ShapesButton';
import Shapes from '../data/Shapes';
import { keys } from '@laufire/utils/lib';

const ShapeButtons = (context) =>
	keys(Shapes).map((shape) =>
		<ShapeButton key={ shape } { ...{ ...context, shape } }/>);

export default ShapeButtons;
