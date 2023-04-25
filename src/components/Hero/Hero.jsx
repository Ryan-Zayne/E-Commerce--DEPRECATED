import { RxPaperPlane } from 'react-icons/rx';
import { useAnimateRef } from '../../hooks';
import { useThemeStore } from '../../zustand-store/themeStore';
import { Button, Carousel } from '../common';

const images = [
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454294/Ecommerce/Carousel-images/laptop1_dviwpy.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454294/Ecommerce/Carousel-images/laptop2_g9ld1b.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454293/Ecommerce/Carousel-images/phone1_tqjof2.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454294/Ecommerce/Carousel-images/phone2_ngnbzv.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454296/Ecommerce/Carousel-images/tablet2_yyzbfs.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454295/Ecommerce/Carousel-images/tablet3_m2meyj.webp',
];

const Hero = () => {
	const isDarkMode = useThemeStore((state) => state.isDarkMode);

	const { animatedElements } = useAnimateRef();

	const styles = {
		leftBtn: 'md:left-[0.8rem] hover:[box-shadow:0_0_5px_var(--text-dark)] lg:left-[29.5rem]',
		rightBtn: 'hover:[box-shadow:0_0_5px_var(--text-dark)] md:right-[0.8rem]',
	};

	const carouselItems = images.map((image) => (
		<Carousel.Item key={image}>
			<img className="h-full object-cover" src={image} alt="" />
		</Carousel.Item>
	));

	const carouselIndicators = images.map((image, index) => (
		<Carousel.Indicator key={image} index={index} />
	));

	return (
		<section id="Hero" className={`max-md:mt-[2rem] lg:bg-primary`}>
			<Carousel
				className={`
						h-[38rem] max-lg:mx-[1rem] max-lg:rounded-[0.7rem] md:h-[41.4rem] lg:h-[46rem]
						${isDarkMode ? 'max-lg:[box-shadow:0_0_3px_0.1px_var(--carousel-dot)]' : ''}
				`}
				images={images}
				arrowIcon={<RxPaperPlane />}
				leftBtnClasses={styles.leftBtn}
				rightBtnClasses={styles.rightBtn}
			>
				<Carousel.ItemWrapper>{carouselItems}</Carousel.ItemWrapper>

				<Carousel.Caption
					className={
						'absolute mt-[5.5rem] flex w-full select-none flex-col items-start gap-[1rem] px-[3.5rem] text-light md:pl-[7.5rem] lg:mt-[8rem] lg:pl-[36rem]'
					}
				>
					<div className="w-[28ch] lg:w-[30ch]">
						<h1
							ref={(elem) => (animatedElements.heading = elem)}
							className="font-roboto text-[clamp(2rem,_4vw+1rem,_3rem)] font-[600] text-heading"
						>
							Explore the Future of Technology
						</h1>
						<p
							ref={(elem) => (animatedElements.paragraph = elem)}
							className="relative z-20 w-[30ch] text-[clamp(1.3rem,_1vw+1rem,_1.7rem)] [margin-block:1.8rem_3rem]"
						>
							Discover the Latest and most Exquisite Tech Products for Your Home, Office, and
							On-the-go Needs.
						</p>
					</div>

					<div ref={(elem) => (animatedElements.button = elem)}>
						<Button
							theme={'secondary'}
							className="text-[clamp(1.3rem,_1vw+1rem,_1.7rem)] font-[600] transition-shadow duration-[400ms] hover:[box-shadow:0_10px_20px_hsl(43,100%,55%,0.4)] active:scale-[1.04] max-sm:p-[1rem_2.8rem]"
						>
							Shop Now
						</Button>
					</div>
				</Carousel.Caption>

				<Carousel.IndicatorWrapper>{carouselIndicators}</Carousel.IndicatorWrapper>
			</Carousel>
		</section>
	);
};

export default Hero;
