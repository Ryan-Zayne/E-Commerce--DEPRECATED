import { useEffect } from 'react';
import { useGlobalActions, createGlobalStore } from '../zustand-store/globalStore';

const useCarousel = (imageArray) => {
	const currentSlide = createGlobalStore((state) => state.currentSlide);

	const { nextSlide, previousSlide, resetSlide } = useGlobalActions();

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
