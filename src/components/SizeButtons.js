import React from 'react';
import SizeButton from './SizeButton';
import { keys } from '@laufire/utils/lib';

const SizeButtons = (context) => {
	const { config: { sizes }} = context;

	return (
		keys(sizes).map((size, key) =>
			<SizeButton
				key={ key }
				{ ...{ ...context, size } }
			/>));
};

export default SizeButtons;
