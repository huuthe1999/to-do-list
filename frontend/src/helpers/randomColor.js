import { colourOptions } from '../assets/data';

export const randomColor = () => {
	const randomIndex = Math.floor(Math.random() * colourOptions.length);
	return colourOptions[randomIndex]['color'];
};
