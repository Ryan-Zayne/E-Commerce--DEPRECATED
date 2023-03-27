import { twMerge } from 'tailwind-merge';
import { useMobileQuery } from '../../hooks';
import { useGlobalStore } from '../../zustand-store/globalStore';
import logo from '../../assets/brand/logo.svg';
import NavHeader from './NavHeader';
import NavigationLinks from './NavigationLinks';
import SearchForm from './SearchForm';

const Navbar = () => {
	const isSearchShow = useGlobalStore((state) => state.isSearchShow);
	const isMobile = useMobileQuery();

	const FORM_CLASSES = twMerge(`
		absolute top-[7.3rem] z-[10] px-[2rem] w-[100%] flex h-0 justify-center items-center overflow-y-hidden
		bg-body transition-[height] duration-[600ms] ease-out rounded-[0_0_5px_5px]
		${isSearchShow ? 'h-[8.1rem] duration-500' : ''}
	`);

	return (
		<header id="Navbar" className="flex flex-wrap justify-center pt-[1rem] md:gap-[2rem]">
			{/* Logo, Search Bar and Header Icons */}
			<NavHeader logo={logo} />

			{/* Search Bar for Mobile */}
			{isMobile && <SearchForm className={FORM_CLASSES} />}

			{/* Navigation Links */}
			<NavigationLinks logo={logo} />
		</header>
	);
};

export default Navbar;
