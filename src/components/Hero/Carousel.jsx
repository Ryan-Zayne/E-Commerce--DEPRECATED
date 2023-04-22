import { RxPaperPlane } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import { useAnimateRef, useCarousel } from '../../hooks';
import { useGlobalStore } from '../../zustand-store/globalStore';
import { useThemeStore } from '../../zustand-store/themeStore';
import { Button } from '../common';
import CarouselItem from './Carousel-Item';

const images = [
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454294/Ecommerce/Carousel-images/laptop1_dviwpy.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454294/Ecommerce/Carousel-images/laptop2_g9ld1b.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454293/Ecommerce/Carousel-images/phone1_tqjof2.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454294/Ecommerce/Carousel-images/phone2_ngnbzv.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454296/Ecommerce/Carousel-images/tablet2_yyzbfs.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454295/Ecommerce/Carousel-images/tablet3_m2meyj.webp',
];

const Carousel = () => {
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const isMobile = useGlobalStore((state) => state.isMobile);

	const { currentSlide, setIsPaused, goToSlide, nextSlideButton, previousSlideButton } = useCarousel({
		numberOfSlides: images.length,
		autoSlide: !isMobile && true,
		autoSlideInterval: 10000,
	});
	const { animatedElements } = useAnimateRef();

	const carouselDots = images.map((item, index) => (
		<span
			onClick={() => goToSlide(index)}
			key={item}
			className={twMerge(`
				inline-block h-[0.8rem] w-[0.8rem] shrink-0 cursor-pointer rounded-[50%] bg-carousel-btn transition-[width] duration-[250ms] ease-in-out hover:bg-carousel-dot hover:[box-shadow:0_0_5px_var(--carousel-dot)]
				${index === currentSlide ? 'w-[3.5rem] rounded-[0.5rem] bg-carousel-dot' : ''}
			`)}
		/>
	));

	const carouselItems = images.map((image) => {
		return (
			<CarouselItem key={image}>
				<img className="h-full object-cover" src={image} alt="" />
			</CarouselItem>
		);
	});

	return (
		<article
			id="Carousel"
			className={`
				relative flex h-[38rem] overflow-hidden max-lg:mx-[0.7rem] max-lg:rounded-[0.7rem] md:h-[41.4rem]
				${isDarkMode ? 'max-md:[box-shadow:0_0_3px_0.1px_var(--carousel-dot)]' : ''}
			`}
			onMouseEnter={() => !isMobile && setIsPaused(true)}
			onMouseLeave={() => !isMobile && setIsPaused(false)}
		>
			<button
				onClick={previousSlideButton}
				className="absolute left-[0.4rem] top-[45%] z-10 rotate-180 rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-[transform] hover:[box-shadow:0_0_5px_var(--text-dark)] active:scale-[1.1] md:left-[0.9rem]"
			>
				<RxPaperPlane />
			</button>

			<ul
				id="Carousel Body"
				className=" h-full whitespace-nowrap brightness-[0.6] contrast-[1] transition-[transform] duration-[1500ms] [transition-timing-function:ease]"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{carouselItems}
			</ul>

			<span
				id="Slider dots"
				className="absolute bottom-[2.5rem] inline-flex w-full items-center justify-center gap-[1.5rem]"
			>
				{carouselDots}
			</span>

			<div
				id="Carousel Description"
				className="absolute mt-[5.5rem] flex w-full select-none flex-col items-start gap-[1rem] px-[3.5rem] text-light md:pl-[5rem]"
			>
				{/* Heading and Caption */}
				<div className="w-[28ch]">
					<h1
						ref={(elem) => (animatedElements.heading = elem)}
						className="font-roboto text-[clamp(2rem,_3vw+1rem,_2.5rem)] font-[600] text-heading"
					>
						Explore the Future of Technology
					</h1>
					<p
						ref={(elem) => (animatedElements.paragraph = elem)}
						className="relative z-20 w-[30ch] text-[clamp(1.3rem,_1vw+1rem,_1.6rem)] [margin-block:1.8rem_3rem]"
					>
						Discover the Latest and most Exquisite Tech Products for Your Home, Office, and
						On-the-go Needs.
					</p>
				</div>

				{/* Shop-Now button */}
				<div ref={(elem) => (animatedElements.button = elem)}>
					<Button
						theme={'secondary'}
						className="text-[clamp(1.3rem,_1vw+1rem,_1.6rem)] font-[600] transition-shadow duration-[400ms] hover:[box-shadow:0_10px_20px_hsl(43,100%,55%,0.4)] active:scale-[1.04] max-sm:p-[1rem_2.8rem]"
					>
						Shop Now
					</Button>
				</div>
			</div>

			<button
				onClick={nextSlideButton}
				className="absolute right-[0.4rem] top-[45%] z-10 rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-[transform] hover:[box-shadow:0_0_5px_var(--text-dark)] active:scale-[1.1] md:right-[0.8rem]"
			>
				<RxPaperPlane />
			</button>
		</article>
	);
};

export default Carousel;
