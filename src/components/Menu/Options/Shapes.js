import React from 'react';
import { keys } from '@laufire/utils/lib';
import ShapesTypes from '../../../data/ShapesTypes';

const Shapes = () =>

	keys(ShapesTypes).map((shape, key) =>
		<option key={ key } value={ shape }>{shape}</option>);

export default Shapes;
