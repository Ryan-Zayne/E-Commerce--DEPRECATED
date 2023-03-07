import { useEffect } from 'react';
import { useGeneralActions, useGeneralState } from '../zustand-store/generalStore';

const useCarousel = (imageArray) => {
	const currentSlide = useGeneralState();
	const { nextSlide, previousSlide, resetSlide } = useGeneralActions();

	const maxSlide = imageArray.length - 1;

	function previousSlideButton() {
		if (currentSlide === 0) {
			resetSlide(maxSlide);
		} else {
			previousSlide();
		}
	}

	function nextSlideButton() {
		if (currentSlide === maxSlide) {
			resetSlide(0);
		} else {
			nextSlide();
		}
	}

	useEffect(() => {
		const infiniteScroll = setInterval(() => nextSlideButton(), 10000);
		return () => clearInterval(infiniteScroll);
	});

	return { currentSlide, resetSlide, previousSlideButton, nextSlideButton };
};

export default useCarousel;
