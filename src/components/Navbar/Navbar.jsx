import { BiSearchAlt2 } from 'react-icons/bi';
import logo from './logo.svg';

const Navbar = () => {
	return (
		<header className="flex">
			<img className="max-w-[12rem]" src={logo} alt="" />
			<BiSearchAlt2 />
		</header>
	);
};

export default Navbar;
