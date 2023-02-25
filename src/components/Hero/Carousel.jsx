import { RxPaperPlane } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../lib';
import useCarousel from '../../lib/hooks/useCarousel';
import { laptop2, phone1, phone2, laptop3, tablet3, tablet2 } from './assets';

const Carousel = () => {
	const images = [laptop3, laptop2, phone1, tablet2, phone2, tablet3];

	const { currentSlide, setCurrentSlide, nextSlideButton, previousSlideButton } = useCarousel(images);

	const renderedImages = images.map((image, index) => (
		<img
			key={image}
			className="absolute h-[100%] object-cover blur-[0.07rem] transition-[opacity] duration-[1000ms] ease-in"
			src={image}
			alt=""
			style={{ opacity: `${index === currentSlide ? '1' : '0'}` }}
		/>
	));

	const carouselDots = images.map((item, index) => (
		<span
			onClick={() => setCurrentSlide(index)}
			key={item}
			className={twMerge(`
				inline-block aspect-square w-[1rem] cursor-pointer rounded-[50%] bg-carousel-btn hover:bg-slate-200 hover:[box-shadow:0_0_5px_white]
				${index === currentSlide ? 'w-[1.2rem] bg-slate-200 transition-[background-color] duration-1000' : ''}
			`)}
		/>
	));

	return (
		<section className="relative mx-[0.4rem] flex h-[35rem] items-center justify-center overflow-hidden rounded-[5px] text-[1.4rem]">
			<button
				onClick={previousSlideButton}
				className="absolute left-[1rem] top-[45%] z-10 rotate-180 rounded-[5px] bg-carousel-btn p-[1rem_0.7rem] transition-[transform] hover:[box-shadow:0_0_5px_white] hover:[border:1px_solid_white] active:scale-[1.1]"
			>
				<RxPaperPlane />
			</button>

			{renderedImages}

			<span className="absolute bottom-[4rem] inline-flex w-[100%] items-center justify-center gap-[1.5rem]">
				{carouselDots}
			</span>

			<article className="relative z-20 flex w-[100%] flex-col items-start gap-[1rem] px-[2rem] text-white">
				<div className="w-[28ch]">
					<h1 className="mb-[1rem] font-roboto text-[2.5rem] text-secondary">
						Explore the Future of Technology
					</h1>
					<p>
						Discover the Latest and Greatest Tech Products for Your Home, Office, and On-the-go Needs.
					</p>
				</div>
				<Button
					theme={'secondary'}
					className="relative z-[10] mt-[2rem] text-[1.6rem] font-[600] hover:[box-shadow:0_7px_20px_hsl(43,100%,55%,0.4)] active:scale-[1.03]"
				>
					Shop Now
				</Button>
			</article>

			<button
				onClick={nextSlideButton}
				className="absolute right-[1rem] top-[45%] z-10 rounded-[5px] bg-carousel-btn p-[1rem_0.7rem] transition-[transform] hover:[box-shadow:0_0_5px_white] hover:[border:1px_solid_white] active:scale-[1.1]"
			>
				<RxPaperPlane />
			</button>
		</section>
	);
};

export default Carousel;
