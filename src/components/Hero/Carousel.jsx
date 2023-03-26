import { RxPaperPlane } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import { useAnimateRef, useCarousel } from '../../hooks';
import { useThemeStore } from '../../zustand-store/themeStore';
import { Button } from '../common';
import * as assets from './images';

const images = Object.values(assets);

const Carousel = () => {
	const { currentSlide, goToSlide, nextSlideButton, previousSlideButton } = useCarousel({
		numberOfSlides: images.length,
		autoPlay: true,
		interval: 8000,
	});
	const { animatedElements } = useAnimateRef();
	const isDarkMode = useThemeStore((state) => state.isDarkMode);

	const carouselDots = images.map((item, index) => (
		<span
			onClick={() => goToSlide(index)}
			key={item}
			className={twMerge(`
				inline-block h-[0.8rem] w-[0.8rem] shrink-0 cursor-pointer rounded-[50%] bg-carousel-btn transition-[width] duration-[300ms] [transition-timing-function:ease] hover:bg-carousel-dot hover:[box-shadow:0_0_5px_var(--carousel-dot)]
				${index === currentSlide ? 'w-[3.5rem] rounded-[1rem] bg-carousel-dot' : ''}
			`)}
		/>
	));

	const carouselSlides = images.map((image, index) => {
		return (
			<img
				key={image}
				className={twMerge(`
					absolute h-full object-cover object-[center] transition-[opacity,transform] duration-[2000ms] [transition-timing-function:ease]
					${index === currentSlide ? 'opacity-1 translate-x-[0]' : 'translate-x-[-100%] opacity-[0.6]'}
				`)}
				src={image}
				alt=""
			/>
		);
	});

	return (
		<article id="Carousel" className="relative flex min-h-[41.4rem] max-sm:mx-[2rem]">
			<button
				onClick={previousSlideButton}
				className="absolute left-[0.4rem] top-[45%] z-10 rotate-180 rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-[transform] hover:[box-shadow:0_0_5px_var(--text-dark)] active:scale-[1.1] md:left-[0.9rem]"
			>
				<RxPaperPlane />
			</button>

			<ul
				id="Images"
				className={twMerge(`
					relative w-full overflow-hidden rounded-[5px] brightness-[0.6] contrast-[1] md:rounded-none
					${isDarkMode ? '[box-shadow:0_0_3px_0.1px_var(--carousel-dot)]' : ''}
				`)}
			>
				{carouselSlides}
			</ul>

			<span
				id="Slider dots"
				className="absolute bottom-[2.5rem] inline-flex w-full items-center justify-center gap-[1.5rem]"
			>
				{carouselDots}
			</span>

			<section
				id="Description"
				className="absolute mt-[5.5rem] flex w-full select-none flex-col items-start gap-[1rem] px-[3.5rem] text-light md:pl-[5rem]"
			>
				{/* Heading and Caption */}
				<article className="w-[28ch]">
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
				</article>

				{/* Shop-Now button */}
				<span ref={(elem) => (animatedElements.button = elem)}>
					<Button
						theme={'secondary'}
						className="text-[clamp(1.3rem,_1vw+1rem,_1.6rem)] font-[600] transition-shadow duration-[400ms] hover:[box-shadow:0_10px_20px_hsl(43,100%,55%,0.4)] active:scale-[1.04] max-sm:p-[1rem_2.8rem]"
					>
						Shop Now
					</Button>
				</span>
			</section>

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
