import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import logo from '../../assets/logo.svg';
import { useMediaQuery } from '../../hooks';
import NavBarLinks from './NavBarLinks';
import NavHeader from './NavHeader';
import SearchForm from './SearchForm';

const Navbar = () => {
	const [searchBarShow, setSearchBarShow] = useState(false);
	const [navShow, setNavShow] = useState(false);
	const { isMobile } = useMediaQuery();
	const searchShowHandler = () => setSearchBarShow((prev) => !prev);
	const navShowHandler = () => setNavShow((prev) => !prev);

	const FORM_CLASSES = twMerge(`
				mt-[1rem] px-[2rem] flex h-0 w-full items-center overflow-hidden transition-[height] duration-[600ms] ease-out
				${searchBarShow ? 'h-[7rem] duration-500' : ''}
	`);

	return (
		<header id="Navbar" className="mt-[1rem] flex flex-wrap md:gap-[2rem]">
			{/* Logo, Search Bar and Header Icons */}
			<NavHeader
				logo={logo}
				searchShowHandler={searchShowHandler}
				navShow={navShow}
				navShowHandler={navShowHandler}
			/>

			{/* SEARCH BAR FOR MOBILE */}
			{isMobile && <SearchForm className={FORM_CLASSES} />}

			{/* NAVIGATION LIST */}
			<NavBarLinks navShowHandler={navShowHandler} navShow={navShow} logo={logo} />
		</header>
	);
};

export default Navbar;
