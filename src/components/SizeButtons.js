import React from 'react';
import { keys } from '@laufire/utils/lib';

const SizeButtons = (context) => {
	const { config: { sizes }} = context;

	return keys(sizes).map((size, key) =>
		<option key={ key } value={ size }>{size}</option>);
};

export default SizeButtons;
