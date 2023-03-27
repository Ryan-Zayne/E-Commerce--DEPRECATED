import { useDesktopQuery } from '../../hooks';
import Carousel from './Carousel';

const Hero = () => {
	const isDesktop = useDesktopQuery();
	return (
		<section id="Hero" className={`max-md:mt-[2rem] md:bg-primary ${isDesktop ? 'pl-[28rem]' : ''}`}>
			<Carousel />
		</section>
	);
};

export default Hero;
