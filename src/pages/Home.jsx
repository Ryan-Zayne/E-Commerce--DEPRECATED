import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import { ThemeContextProvider } from '../context';

const Home = () => {
	return (
		<ThemeContextProvider>
			<Navbar />
			<Hero />
		</ThemeContextProvider>
	);
};

export default Home;
