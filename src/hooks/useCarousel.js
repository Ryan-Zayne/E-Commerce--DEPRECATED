import { useState } from 'react';
import { useGlobalActions, useGlobalStore } from '../zustand-store/globalStore';
import useInterval from './useInterval';

const useCarousel = ({ numberOfSlides, autoPlay = false, interval = 10000 }) => {
	const [isPaused, setIsPaused] = useState(false);
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	const { nextSlide, previousSlide, goToSlide } = useGlobalActions();

	const maxSlide = numberOfSlides - 1;

	const nextSlideButton = () => (currentSlide === maxSlide ? goToSlide(0) : nextSlide());

	const previousSlideButton = () => (currentSlide === 0 ? goToSlide(maxSlide) : previousSlide());

	// Autoplay functionality
	useInterval(() => nextSlideButton(), autoPlay && !isPaused ? interval : null);

	return { currentSlide, goToSlide, previousSlideButton, nextSlideButton, setIsPaused };
};

export default useCarousel;
