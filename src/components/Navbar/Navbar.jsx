import { useState } from 'react';
import { useMediaQuery } from '../../hooks';
import logo from '../../assets/logo.svg';
import MobileSearchForm from './MobileSearchForm';
import NavBarLinks from './NavBarLinks';
import NavHeader from './NavHeader';

const Navbar = () => {
	const [searchBarShow, setSearchBarShow] = useState(false);
	const [navShow, setNavShow] = useState(false);
	const { isMobile } = useMediaQuery();
	const searchShowHandler = () => setSearchBarShow((prev) => !prev);
	const navShowHandler = () => setNavShow((prev) => !prev);

	return (
		<section className="flex flex-wrap md:gap-[2rem]">
			{/* Logo, Search Bar and Header Icons */}
			<NavHeader
				logo={logo}
				searchShowHandler={searchShowHandler}
				navShow={navShow}
				navShowHandler={navShowHandler}
			/>

			{/* SEARCH BAR FOR MOBILE */}
			{isMobile && <MobileSearchForm searchShow={searchBarShow} />}

			{/* NAVIGATION LIST */}
			<NavBarLinks navShowHandler={navShowHandler} navShow={navShow} logo={logo} />
		</section>
	);
};

export default Navbar;
