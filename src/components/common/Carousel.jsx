import { twMerge } from 'tailwind-merge';
import { useGlobalActions, useGlobalStore } from '../../zustand-store/globalStore';
import { useCarousel } from '../../hooks';

const Carousel = ({
	as = 'article',
	children,
	outerClassName = '',
	innerClassName = '',
	images,
	arrowIcon,
	leftBtnClasses = '',
	rightBtnClasses = '',
	isAutoSlide = false,
	autoSlideInterval = 10000,
	pauseOnHover = false,
}) => {
	const Element = as;

	const { setIsPaused, nextSlideButton, previousSlideButton } = useCarousel({
		numberOfSlides: images.length,
		isAutoSlide,
		autoSlideInterval,
	});

	return (
		<Element
			id="Carousel"
			className={twMerge(`relative flex select-none ${outerClassName}`)}
			onMouseEnter={() => pauseOnHover && setIsPaused(true)}
			onMouseLeave={() => pauseOnHover && setIsPaused(false)}
		>
			<button className="absolute left-0 z-40 h-full w-[9rem]" onClick={previousSlideButton}>
				<span
					className={twMerge(
						`absolute left-[0.7rem] top-[45%] rotate-180 rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-transform active:scale-[1.11] ${leftBtnClasses}`
					)}
				>
					{arrowIcon}
				</span>
			</button>

			<div
				id="Carousel Inner"
				className={twMerge(
					`flex h-full overflow-x-scroll scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${innerClassName}`
				)}
			>
				{children}
			</div>

			<button className="absolute right-0 z-40 h-full w-[9rem]" onClick={nextSlideButton}>
				<span
					className={twMerge(
						`absolute right-[0.7rem] top-[45%] rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-transform active:scale-[1.11] ${rightBtnClasses}`
					)}
				>
					{arrowIcon}
				</span>
			</button>
		</Element>
	);
};

const CarouselItem = ({ children, className = '' }) => {
	return (
		<li className={twMerge(`inline-flex w-full shrink-0 snap-center ${className}`)}>{children}</li>
	);
};

const CarouselItemWrapper = ({ children, className = '' }) => {
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	return (
		<ul
			id="Carousel Image Wrapper"
			// Set pointer-events-none to prevent swipe scrolling (E get why...)
			className={twMerge(
				`pointer-events-none flex w-full shrink-0 flex-nowrap transition-transform duration-[600ms] ease-in-out ${className}`
			)}
			style={{
				transform: `translateX(-${currentSlide * 100}%)`,
			}}
		>
			{children}
		</ul>
	);
};

const CarouselCaption = ({ children, className = '' }) => {
	return (
		<div id="Carousel Caption" className={twMerge(`absolute inset-0 text-light ${className}`)}>
			{children}
		</div>
	);
};

const CarouselIndicatorWrapper = ({ children, className = '' }) => {
	return (
		<span
			id="Carousel Indicators"
			className={`absolute bottom-[2.5rem] inline-flex w-full items-center justify-center gap-[1.5rem] ${className}`}
		>
			{children}
		</span>
	);
};

const CarouselIndicator = ({ className = '', onActiveClassName, index }) => {
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	const { goToSlide } = useGlobalActions();
	return (
		<span
			onClick={() => goToSlide(index)}
			className={twMerge(`
				inline-block h-[0.6rem] w-[0.6rem] shrink-0 cursor-pointer rounded-[50%] bg-carousel-btn ease-in-out hover:bg-carousel-dot hover:[box-shadow:0_0_5px_var(--carousel-dot)] ${className}
				${index === currentSlide ? `w-[3.5rem] rounded-[0.5rem] bg-carousel-dot ${onActiveClassName}` : ''}
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
