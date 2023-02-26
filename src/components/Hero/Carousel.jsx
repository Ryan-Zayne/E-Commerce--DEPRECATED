import { RxPaperPlane } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../lib';
import { useAnimateRef, useCarousel } from '../../lib/hooks';
import { laptop2, laptop3, phone1, phone2, tablet2, tablet3 } from './assets';

const Carousel = () => {
	const images = [laptop3, laptop2, phone1, tablet2, phone2, tablet3];

	const { currentSlide, setCurrentSlide, nextSlideButton, previousSlideButton } = useCarousel(images);

	const animatedElements = useAnimateRef();

	const carouselDots = images.map((item, index) => (
		<span
			onClick={() => setCurrentSlide(index)}
			key={item}
			className={twMerge(`
		inline-block aspect-square w-[1rem] cursor-pointer rounded-[50%] bg-carousel-btn hover:bg-carousel-dot hover:[box-shadow:0_0_5px_var(--carousel-dot)]
		${index === currentSlide ? 'w-[1.2rem] bg-carousel-dot' : ''}
		`)}
		/>
	));

	const renderedImages = images.map((image, index) => {
		return (
			<img
				key={image}
				className="absolute h-[100%] object-cover transition-[opacity,transform] duration-[1000ms] ease-in"
				src={image}
				alt=""
				style={{
					opacity: `${index === currentSlide ? '1' : '0.8'}`,
					transform: `translateX(${index === currentSlide ? '0' : '100%'})`,
				}}
			/>
		);
	});

	return (
		<section className="relative mx-[0.5rem] mt-[1rem] flex h-[38rem]">
			<button
				onClick={previousSlideButton}
				className="absolute left-[0.4rem] top-[45%] z-10 rotate-180 rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-[transform] hover:[box-shadow:0_0_5px_var(--text-dark)] active:scale-[1.1]"
			>
				<RxPaperPlane />
			</button>

			<article className="relative w-[100%] overflow-hidden rounded-[5px] bg-primary brightness-[0.6]">
				{renderedImages}
			</article>

			<span className="absolute bottom-[2.5rem] inline-flex w-[100%] items-center justify-center gap-[1.5rem]">
				{carouselDots}
			</span>

			<article className="absolute mt-[5.5rem] flex w-[100%] select-none flex-col items-start gap-[1rem] px-[3.5rem] text-light">
				{/* Heading and Caption */}
				<div className="w-[28ch]">
					<h1
						ref={(elem) => (animatedElements.heading = elem)}
						className="font-roboto text-[2.5rem] font-[500] text-heading"
					>
						Explore the Future of Technology
					</h1>
					<p
						ref={(elem) => (animatedElements.paragraph = elem)}
						className="relative z-20 [margin-block:1.8rem_3rem]"
					>
						Discover the Latest and most Exquisite Tech Products for Your Home, Office, and On-the-go
						Needs.
					</p>
				</div>
				{/* Shop-Now button */}
				<div ref={(elem) => (animatedElements.button = elem)}>
					<Button
						theme={'secondary'}
						className="text-[1.6rem] font-[600] hover:[box-shadow:0_0_10px_3px_hsl(43,100%,55%,0.4)] active:scale-[1.04]"
					>
						Shop Now
					</Button>
				</div>
			</article>

			<button
				onClick={nextSlideButton}
				className="absolute right-[0.4rem] top-[45%] z-10 rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-[transform] hover:[box-shadow:0_0_5px_var(--text-dark)] active:scale-[1.1]"
			>
				<RxPaperPlane />
			</button>
		</section>
	);
};

export default Carousel;
