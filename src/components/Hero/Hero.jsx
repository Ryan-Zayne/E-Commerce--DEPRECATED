import { useDesktopQuery } from '../../hooks';
import Carousel from './Carousel';

const Hero = () => {
	const isDesktop = useDesktopQuery();
	return (
		<section id="Hero" className={`bg-primary ${isDesktop ? 'pl-[28rem]' : ''}`}>
			<Carousel />
		</section>
	);
};

export default Hero;
