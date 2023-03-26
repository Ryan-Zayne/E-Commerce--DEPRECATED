import { useEffect } from 'react';
import { useGlobalActions, useGlobalStore } from '../zustand-store/globalStore';

const useCarousel = ({ numberOfSlides, autoPlay = false, interval = 10000 }) => {
	const currentSlide = useGlobalStore((state) => state.currentSlide);

	const { nextSlide, previousSlide, goToSlide } = useGlobalActions();

	const maxSlide = numberOfSlides - 1;

	const nextSlideButton = () => (currentSlide === maxSlide ? goToSlide(0) : nextSlide());

	const previousSlideButton = () => (currentSlide === 0 ? goToSlide(maxSlide) : previousSlide());

	useEffect(() => {
		let infiniteScrollId;
		if (autoPlay) {
			infiniteScrollId = setInterval(() => nextSlideButton(), interval);
		}
		return () => clearInterval(infiniteScrollId);
	});

	return { currentSlide, goToSlide, previousSlideButton, nextSlideButton };
};

export default useCarousel;
