import { useState } from 'react';
import { useGlobalActions, useGlobalStore } from '../zustand-store/globalStore';
import useRequestAnimation from './useRequestAnimation';

const useCarousel = ({ numberOfSlides, autoSlide = false, autoSlideInterval = 10000 }) => {
	const [isPaused, setIsPaused] = useState(false);
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	const { nextSlide, previousSlide, goToSlide } = useGlobalActions();

	const maxSlide = numberOfSlides - 1;

	const nextSlideButton = () => (currentSlide === maxSlide ? goToSlide(0) : nextSlide());

	const previousSlideButton = () => (currentSlide === 0 ? goToSlide(maxSlide) : previousSlide());

	// AutoSlide functionality
	useRequestAnimation(() => nextSlideButton(), autoSlide && !isPaused ? autoSlideInterval : null);

	return { previousSlideButton, nextSlideButton, setIsPaused };
};

export default useCarousel;
