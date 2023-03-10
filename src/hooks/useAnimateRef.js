import { useRef, useEffect } from 'react';
import { createGlobalStore } from '../zustand-store/globalStore';

const classes = [
	{ target: 'heading', animationClass: 'animate-fade-in-down' },
	{ target: 'button', animationClass: 'animate-fade-in-up' },
	{ target: 'paragraph', animationClass: 'animate-fade-in-up-2' },
];

const useAnimateRef = () => {
	const { current } = useRef({});
	const currentSlide = createGlobalStore((state) => state.currentSlide);

	useEffect(() => {
		classes.forEach((className) => {
			current[className.target]?.classList.add(className.animationClass);
			console.assert(
				current[className.target],
				new Error(`Target Element: ${className.target} does not exist!`)
			);
		});
	}, [current, currentSlide]);

	useEffect(() => {
		const fadeAnimation = setTimeout(() => {
			classes.forEach((className) => {
				current[className.target]?.classList.remove(className.animationClass);
			});
		}, 2000);

		return () => clearTimeout(fadeAnimation);
	}, [current, currentSlide]);

	return { current };
};

export default useAnimateRef;
