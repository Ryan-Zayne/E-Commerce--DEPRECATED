import { useState } from 'react';
import { BiSearchAlt2, BiHeart, BiUser, BiCartAlt } from 'react-icons/bi';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from '../../lib';
import MobileSearchForm from './MobileSearchForm';
import Button from '../../utils/Button';
import logo from './logo.svg';
import NavBarLinks from './NavBarLinks';

const Navbar = () => {
	const { isMobile, isTablet, isDesktop } = useMediaQuery();
	const [searchShow, setSearchshow] = useState(false);
	const [navShow, setNavShow] = useState(false);

	const searchShowHandler = () => setSearchshow((prev) => !prev);
	const navShowHandler = () => setNavShow((prev) => !prev);

	return (
		<section className="flex flex-wrap md:gap-[2rem]">
			{/* Logo, Search Bar and Header Icons */}
			<article className="top-row flex w-[100%] justify-between gap-[2rem] px-[2vw]">
				<img className="max-w-[16rem]" src={logo} alt="" />
				{isTablet && (
					<form className="flex w-[min(100%,_54vw)] items-center" onSubmit={(e) => e.preventDefault()}>
						<input
							className="w-[100%] rounded-[2.5rem_0_0_2.5rem] border-secondary py-[0.6rem] pl-[2.3rem] transition-[box-shadow] duration-200 [border-width:2px_0_2px_2px] placeholder:font-[500] focus-within:shadow-[1px_0_10px_2px_var(--color-secondary)]"
							type="text"
							name=""
							id=""
							placeholder="Search for products..."
						/>
						<Button
							className="text-[1.8rem] transition-colors duration-300 hover:bg-primary hover:text-secondary active:scale-[1.028]"
							variant={'input'}
							size={'sm'}
							theme={'secondary'}
						>
							<BiSearchAlt2 />
						</Button>
					</form>
				)}

				<div className="flex items-center justify-between text-[2rem] [width:clamp(12rem,_42vw,_22rem)]">
					{isMobile && <BiSearchAlt2 onClick={searchShowHandler} />}
					<BiHeart />
					<BiUser />
					<BiCartAlt />
					{!isDesktop && (
						<div className="z-20 w-[2.6rem]">
							{navShow ? (
								<RiCloseFill className="animate-bounce" fontSize={'3rem'} onClick={navShowHandler} />
							) : (
								<RiMenu3Fill onClick={navShowHandler} />
							)}
						</div>
					)}
				</div>
			</article>

			{/* SEARCH BAR FOR MOBILE */}
			{isMobile && <MobileSearchForm searchShow={searchShow} />}

			{/* NAVIGATION LIST */}
			<article className="w-[100%]">
				{!isDesktop && (
					<div
						onClick={navShowHandler}
						className={twMerge(`
						fixed w-0 bg-[hsl(0,0%,0%,0.55)] [inset:0_0_0_auto] [transition:width_100ms_linear]
						${navShow ? 'w-[100vw] [transition:width_500ms_ease-out]' : ''}`)}
					>
						{/* Overlay here */}
					</div>
				)}
				<NavBarLinks navShow={navShow} logo={logo} />
			</article>
		</section>
	);
};

export default Navbar;
