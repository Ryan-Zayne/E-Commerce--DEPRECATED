import { BiCartAlt, BiHeart, BiSearchAlt2, BiUser } from 'react-icons/bi';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { Button } from '../../lib';
import { useMediaQuery } from '../../lib/hooks';

const NavHeader = ({ logo, searchShowHandler, navShow, navShowHandler }) => {
	const { isMobile, isTablet, isDesktop } = useMediaQuery();
	return (
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
				{isMobile && (
					<BiSearchAlt2 className="cursor-pointer active:scale-[1.2]" onClick={searchShowHandler} />
				)}
				<BiHeart className="cursor-pointer active:scale-[1.2]" />
				<BiUser className="cursor-pointer active:scale-[1.2]" />
				<BiCartAlt className="cursor-pointer active:scale-[1.2]" />

				{/* HARMBURGER ICON */}
				{!isDesktop && (
					<div className="z-[120] w-[2.6rem]">
						{navShow ? (
							<RiCloseFill
								className=" animate-[bounce_1.5s_ease_infinite]"
								fontSize={'3rem'}
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
