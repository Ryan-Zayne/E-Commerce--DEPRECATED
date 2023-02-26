import { useState, useEffect } from 'react';

const useCarousel = (imageArray) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const maxSlide = imageArray.length - 1;

	function previousSlideButton() {
		if (currentSlide === 0) {
			setCurrentSlide(maxSlide);
		} else {
			setCurrentSlide((prev) => prev - 1);
		}
	}

	function nextSlideButton() {
		if (currentSlide === maxSlide) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide((prev) => prev + 1);
		}
	}

	useEffect(() => {
		const infiniteScroll = setInterval(() => nextSlideButton(), 5000);
		return () => clearInterval(infiniteScroll);
	});

	return { currentSlide, maxSlide, previousSlideButton, nextSlideButton, setCurrentSlide };
};

export default useCarousel;
