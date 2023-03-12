import { useEffect } from 'react';
import { useGlobalActions, useGlobalStore } from '../zustand-store/globalStore';

const useCarousel = (imageArray) => {
	const currentSlide = useGlobalStore((state) => state.currentSlide);

	const { nextSlide, previousSlide, resetSlide } = useGlobalActions();

	const maxSlide = imageArray.length - 1;

	const previousSlideButton = () => (currentSlide === 0 ? resetSlide(maxSlide) : previousSlide());

	const nextSlideButton = () => (currentSlide === maxSlide ? resetSlide(0) : nextSlide());

	useEffect(() => {
		const infiniteScroll = setInterval(() => nextSlideButton(), 10000);
		return () => clearInterval(infiniteScroll);
	});

	return { currentSlide, resetSlide, previousSlideButton, nextSlideButton };
};

export default useCarousel;
