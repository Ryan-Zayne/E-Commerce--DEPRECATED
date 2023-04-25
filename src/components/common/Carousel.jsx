import { twMerge } from 'tailwind-merge';
import { useGlobalActions, useGlobalStore } from '../../zustand-store/globalStore';
import { useCarousel } from '../../hooks';

const Carousel = ({
	children,
	className = '',
	leftBtnClasses = '',
	rightBtnClasses = '',
	images,
	arrowIcon,
	isAutoSlide,
	autoSlideInterval = 8000,
	pauseOnHover,
}) => {
	const isMobile = useGlobalStore((state) => state.isMobile);

	const { setIsPaused, nextSlideButton, previousSlideButton } = useCarousel({
		numberOfSlides: images.length,
		isAutoSlide,
		autoSlideInterval,
	});

	return (
		<article
			id="Carousel"
			className={twMerge(`relative flex overflow-hidden ${className}`)}
			onMouseEnter={() => (pauseOnHover && !isMobile === true ? setIsPaused(true) : null)}
			onMouseLeave={() => (pauseOnHover && !isMobile === true ? setIsPaused(false) : null)}
		>
			<button
				onClick={previousSlideButton}
				className={twMerge(
					`absolute left-[0.4rem] top-[45%] z-10 rotate-180 rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-[transform] active:scale-[1.11] ${leftBtnClasses}`
				)}
			>
				{arrowIcon}
			</button>

			{children}

			<button
				onClick={nextSlideButton}
				className={twMerge(
					`absolute right-[0.4rem] top-[45%] z-10 rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-[transform] active:scale-[1.11] ${rightBtnClasses}`
				)}
			>
				{arrowIcon}
			</button>
		</article>
	);
};

const CarouselItemWrapper = ({ children, className = '' }) => {
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	return (
		<ul
			id="Carousel Image Content"
			className={twMerge(
				`h-full whitespace-nowrap transition-[translate] duration-[1000ms] ease-in-out ${className}`
			)}
			style={{
				translate: `-${currentSlide * 100}%`,
			}}
		>
			{children}
		</ul>
	);
};

const CarouselItem = ({ children, className = '' }) => {
	return (
		<li className={twMerge(`inline-flex h-full w-full items-center justify-center ${className}`)}>
			{children}
		</li>
	);
};

const CarouselCaption = ({ children, className = '' }) => {
	return (
		<div
			id="Carousel Caption"
			className={twMerge(
				`absolute flex w-full select-none flex-col items-start gap-[1rem] ${className}`
			)}
		>
			{children}
		</div>
	);
};

const CarouselIndicatorWrapper = ({ children, className = '' }) => {
	return (
		<span
			id="Slider dots"
			className={`absolute bottom-[2.5rem] inline-flex w-full items-center justify-center gap-[1.5rem] ${className}`}
		>
			{children}
		</span>
	);
};

const CarouselIndicator = ({ size, isActiveSize, index }) => {
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	const { goToSlide } = useGlobalActions();
	return (
		<span
			onClick={() => goToSlide(index)}
			className={twMerge(`
				inline-block h-[0.8rem] w-[0.8rem] shrink-0 cursor-pointer rounded-[50%] bg-carousel-btn ease-in-out hover:bg-carousel-dot hover:[box-shadow:0_0_5px_var(--carousel-dot)] ${size}
				${index === currentSlide ? `w-[3.5rem] rounded-[0.5rem] bg-carousel-dot ${isActiveSize}` : ''}
			`)}
		/>
	);
};

Carousel.Item = CarouselItem;
Carousel.ItemWrapper = CarouselItemWrapper;
Carousel.Caption = CarouselCaption;
Carousel.Indicator = CarouselIndicator;
Carousel.IndicatorWrapper = CarouselIndicatorWrapper;

export default Carousel;
