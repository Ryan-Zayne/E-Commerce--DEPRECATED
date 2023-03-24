import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from '../../hooks';
import { useGlobalStore } from '../../zustand-store/globalStore';
import logo from '../../assets/brand/logo.svg';
import NavHeader from './NavHeader';
import NavigationLinks from './NavigationLinks';
import SearchForm from './SearchForm';

const Navbar = () => {
	const isSearchShow = useGlobalStore((state) => state.isSearchShow);
	const { isMobile } = useMediaQuery();

	const FORM_CLASSES = twMerge(`
		absolute top-[7.4rem] z-[10] px-[2rem] w-[100%] flex h-0 justify-center items-center overflow-y-hidden
		bg-[var(--color-body)] transition-[height] duration-[600ms] ease-out rounded-[5px]
		${isSearchShow ? 'h-[8rem] duration-500' : ''}
	`);

	return (
		<header id="Navbar" className="flex flex-wrap justify-center py-[1rem] md:gap-[2rem]">
			{/* Logo, Search Bar and Header Icons */}
			<NavHeader logo={logo} />

			{/* SEARCH BAR FOR MOBILE */}
			{isMobile && <SearchForm className={FORM_CLASSES} />}

			{/* NAVIGATION LIST */}
			<NavigationLinks logo={logo} />
		</header>
	);
};

export default Navbar;
