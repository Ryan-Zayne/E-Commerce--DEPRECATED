import { BiCartAlt, BiHeart, BiSearchAlt2, BiUser } from 'react-icons/bi';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { useMediaQuery } from '../../hooks';
import SearchForm from './SearchForm';
import ThemeSwitchButton from './ThemeSwitchButton';

const NavHeader = ({ logo, searchShowHandler, navShow, navShowHandler }) => {
	const { isMobile, isTablet, isDesktop } = useMediaQuery();

	return (
		<article className="top-row flex w-full select-none justify-between gap-[1rem] px-[1rem]">
			<img className="w-[13rem] md:w-[16rem]" src={logo} alt="" />

			{isTablet && <SearchForm buttonIcon={<BiSearchAlt2 />} />}

			<div className="flex w-[clamp(19rem,_42vw,_22rem)] items-center justify-between text-[1.8rem]">
				{isMobile && (
					<button className="active:scale-[1.25]" onClick={searchShowHandler}>
						<BiSearchAlt2 />
					</button>
				)}
				<button className="active:scale-[1.2]">
					<BiHeart />
				</button>
				<button className="active:scale-[1.2]">
					<BiUser />
				</button>
				<button className="active:scale-[1.2]">
					<BiCartAlt />
				</button>
				<ThemeSwitchButton />
				{!isDesktop && (
					<button
						id="Hamburger"
						className={`
						z-[120] w-[2.6rem]
						${navShow ? 'md:animate-[bounce_1.5s_ease_infinite]' : ''}
						`}
						onClick={navShowHandler}
					>
						{navShow ? <RiCloseFill className="text-[2.6rem]" /> : <RiMenu3Fill />}
					</button>
				)}
			</div>
		</article>
	);
};

export default NavHeader;
