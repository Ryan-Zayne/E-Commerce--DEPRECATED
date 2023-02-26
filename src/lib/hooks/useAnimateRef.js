import { useRef, useEffect } from 'react';

const useAnimateRef = () => {
	const { current } = useRef({});

	useEffect(() => {
		current.heading.classList.add('animate-fade-in-down');
		current.button.classList.add('animate-fade-in-up');
		current.paragraph.classList.add('animate-fade-in-up-2');

		const fadeAnimation = setTimeout(() => {
			current.heading.classList.remove('animate-fade-in-down');
			current.button.classList.remove('animate-fade-in-up');
			current.paragraph.classList.remove('animate-fade-in-up-2');
		}, 2000);

		return () => clearTimeout(fadeAnimation);
	});

	return current;
};

export default useAnimateRef;
