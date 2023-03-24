import { useDesktopQuery } from '../../hooks';
import Carousel from './Carousel';

const Hero = () => {
	const isDesktop = useDesktopQuery();
	return (
		<section id="Hero" className={`${isDesktop ? 'ml-[29rem]' : ''} mt-[1rem]`}>
			<Carousel />
		</section>
	);
};

export default Hero;
