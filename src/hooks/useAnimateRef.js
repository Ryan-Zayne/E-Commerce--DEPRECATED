import { useRef, useEffect } from 'react';
import { useGeneralState } from '../zustand-store/generalStore';

const classes = [
	{ target: 'heading', animationClass: 'animate-fade-in-down' },
	{ target: 'button', animationClass: 'animate-fade-in-up' },
	{ target: 'paragraph', animationClass: 'animate-fade-in-up-2' },
];
const timeout = 2000;

const useAnimateRef = () => {
	const { current } = useRef({});
	const currentSlide = useGeneralState();

	useEffect(() => {
		classes.forEach((className) => {
			current[className.target]?.classList.add(className.animationClass);

			if (!current[className.target]) {
				console.error(`Target Element: ${className.target} does not exist!`);
			}
		});
	}, [current, currentSlide]);

	useEffect(() => {
		const fadeAnimation = setTimeout(() => {
			classes.forEach((className) => {
				current[className.target]?.classList.remove(className.animationClass);
			});
		}, timeout);

		return () => clearTimeout(fadeAnimation);
	}, [current, currentSlide]);

	return { current };
};

export default useAnimateRef;
