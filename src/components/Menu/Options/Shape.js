import React from 'react';
import { keys } from '@laufire/utils/lib';
import Shapes from '../../../data/Shapes';

const Shape = () =>

	keys(Shapes).map((shape, key) =>
		<option key={ key } value={ shape }>{shape}</option>);

export default Shape;
