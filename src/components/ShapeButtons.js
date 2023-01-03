import React from 'react';
import ShapeButton from './ShapeButton';
import { keys } from '@laufire/utils/lib';
import Shapes from '../data/Shapes';

const ShapeButtons = (context) =>

	keys(Shapes).map((shape, key) =>
		<ShapeButton
			key={ key }
			{ ...{ ...context, shape } }
		/>);

export default ShapeButtons;
