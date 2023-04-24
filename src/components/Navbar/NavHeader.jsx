import { useEffect } from 'react';
import { BiCartAlt, BiHeart, BiSearchAlt2, BiUser } from 'react-icons/bi';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { useGlobalActions, useGlobalStore } from '../../zustand-store/globalStore';
import SearchForm from './SearchForm';
import ThemeSwitchButton from './ThemeSwitchButton';

const NavHeader = ({ logo }) => {
	const isMobile = useGlobalStore((state) => state.isMobile);
	const isTablet = useGlobalStore((state) => state.isTablet);
	const isDesktop = useGlobalStore((state) => state.isDesktop);
	const { handleSearchShow, handleNavShow } = useGlobalActions();
	const isNavShow = useGlobalStore((state) => state.isNavShow);

	// Prevent Scroll on Hamburger menu show
	useEffect(() => {
		if (isNavShow) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [isNavShow]);

	return (
		<article
			id="NavBar Icons and Logo"
			className="flex w-full select-none justify-between gap-[1rem] px-[1rem]"
		>
			<img className="w-[13rem] md:w-[16rem]" src={logo} alt="" />

			{isTablet && <SearchForm buttonIcon={<BiSearchAlt2 />} />}

			<div className="flex w-[clamp(19rem,_42vw,_22rem)] items-center justify-between text-[1.8rem]">
				{isMobile && (
					<button className="hover:text-heading active:scale-[1.25]" onClick={handleSearchShow}>
						<BiSearchAlt2 />
					</button>
				)}
				<button className="hover:text-heading active:scale-[1.3]">
					<BiHeart />
				</button>
				<button className="hover:text-heading active:scale-[1.3]">
					<BiUser />
				</button>
				<button className="hover:text-heading active:scale-[1.3]">
					<BiCartAlt />
				</button>

				<ThemeSwitchButton />

				{!isDesktop && (
					<button
						id="Hamburger"
						className={twMerge(`
							z-[120] w-[2.6rem]
							${isNavShow ? 'fixed right-[1.9rem] animate-[bounce_1.5s_ease_infinite] text-rose-600' : ''}
						`)}
						onClick={handleNavShow}
					>
						{isNavShow ? <RiCloseFill className="text-[3rem]" /> : <RiMenu3Fill />}
					</button>
				)}
			</div>
		</article>
	);
};

export default NavHeader;
