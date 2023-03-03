import { useRef, useEffect } from 'react';

const useAnimateRef = ({ classes, timeout }) => {
	const { current } = useRef({});

	useEffect(() => {
		classes.forEach((className) => {
			current[className.target].classList.add(className.animationClass);
		});

		const fadeAnimation = setTimeout(() => {
			classes.forEach((className) => {
				current[className.target].classList.remove(className.animationClass);
			});
		}, timeout);

		return () => clearTimeout(fadeAnimation);
	});

	return { current };
};

export default useAnimateRef;
