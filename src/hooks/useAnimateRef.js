import { useRef, useEffect } from 'react';
import { useGlobalStore } from '../zustand-store/globalStore';

const elements = [
	{ target: 'heading', animationClass: 'animate-fade-in-down' },
	{ target: 'button', animationClass: 'animate-fade-in-up' },
	{ target: 'paragraph', animationClass: 'animate-fade-in-up-2' },
];

const useAnimateRef = () => {
	const elementRef = useRef({});
	const currentSlide = useGlobalStore((state) => state.currentSlide);

	useEffect(() => {
		elements.forEach((elem) => {
			elementRef.current[elem.target]?.classList.add(elem.animationClass);

			// Error Handling
			console.assert(
				elementRef.current[elem.target],
				new Error(`Target Element: ${elem.target} does not exist!`)
			);
		});

		// Animation Timer
		const fadeAnimation = setTimeout(() => {
			elements.forEach((elem) => {
				elementRef.current[elem.target]?.classList.remove(elem.animationClass);
			});
		}, 2000);

		// Cleanup
		return () => clearTimeout(fadeAnimation);
	}, [currentSlide]);

	return { animatedElements: elementRef.current };
};

export default useAnimateRef;

// Imitation setState updater function for react useState
// const updateCurrent = (updater) => {
// 	elementRef = updater(elementRef.current);
// };
// updateCurrent((prev) => ({ ...prev }));
