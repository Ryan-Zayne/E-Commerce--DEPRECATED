import { useRef, useEffect } from 'react';

const useAnimateRef = ({ classes, timeout }) => {
	const { current } = useRef({});

	useEffect(() => {
		classes.forEach((className) => {
			if (!current[className.target]) {
				// eslint-disable-next-line no-console
				console.error(`Target Element: ${className.target} does not exist!`);
			}
			current[className.target]?.classList.add(className.animationClass);
		});

		const fadeAnimation = setTimeout(() => {
			classes.forEach((className) => {
				current[className.target]?.classList.remove(className.animationClass);
			});
		}, timeout);

		return () => clearTimeout(fadeAnimation);
	});

	return { current };
};

export default useAnimateRef;
