import { useGlobalStore } from '../../zustand-store/globalStore';
import Carousel from './Carousel';

const Hero = () => {
	const isDesktop = useGlobalStore((state) => state.isDesktop);
	return (
		<section id="Hero" className={`max-md:mt-[2rem] lg:bg-primary ${isDesktop ? 'pl-[28rem]' : ''}`}>
			<Carousel />
		</section>
	);
};

export default Hero;
