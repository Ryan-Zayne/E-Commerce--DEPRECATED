import { BiCartAlt, BiHeart, BiSearchAlt2, BiUser } from 'react-icons/bi';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { Button, DarkModeButton } from '../common';
import { useMediaQuery } from '../../hooks';

const NavHeader = ({ logo, searchShowHandler, navShow, navShowHandler }) => {
	const { isMobile, isTablet, isDesktop } = useMediaQuery();

	return (
		<article className="top-row flex w-full select-none justify-between gap-[1rem] px-[1rem]">
			<img className="w-[13rem] md:w-[16rem]" src={logo} alt="" />

			{isTablet && (
				<form className="flex w-[min(100%,_54vw)] items-center" onSubmit={(e) => e.preventDefault()}>
					<input
						className="w-full rounded-[2.5rem_0_0_2.5rem] border-secondary bg-[var(--color-body,_white)] py-[0.6rem] pl-[2.3rem] transition-[box-shadow] duration-200 [border-width:2px_0_2px_2px] placeholder:font-[500] placeholder:text-placeholder focus-within:shadow-[1px_0_10px_2px_var(--color-secondary)]"
						type="text"
						name=""
						id=""
						placeholder="Search for products..."
					/>

					<Button
						className="text-[1.8rem] transition-colors duration-300 hover:bg-primary hover:text-heading active:scale-[1.08]"
						variant={'input'}
						size={'sm'}
						theme={'secondary'}
					>
						<BiSearchAlt2 />
					</Button>
				</form>
			)}

			<div className="flex w-[clamp(18rem,_42vw,_22rem)] items-center justify-between gap-[1rem] text-[2rem]">
				{isMobile && (
					<BiSearchAlt2 className="cursor-pointer active:scale-[1.2]" onClick={searchShowHandler} />
				)}
				<BiHeart className="cursor-pointer active:scale-[1.2]" />
				<BiUser className="cursor-pointer active:scale-[1.2]" />
				<BiCartAlt className="cursor-pointer active:scale-[1.2]" />
				<DarkModeButton />

				{/* HARMBURGER ICON */}
				{!isDesktop && (
					<div className="z-[120] w-[2.6rem]">
						{navShow ? (
							<RiCloseFill
								className="text-[2.6rem] md:animate-[bounce_1.5s_ease_infinite]"
								onClick={navShowHandler}
							/>
						) : (
							<RiMenu3Fill onClick={navShowHandler} />
						)}
					</div>
				)}
			</div>
		</article>
	);
};

export default NavHeader;
