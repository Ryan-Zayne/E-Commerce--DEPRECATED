import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from '../../lib/hooks';

const NavBarLinks = ({ navShow, navShowHandler, logo }) => {
	const { isDesktop } = useMediaQuery();

	const NAVLIST_CLASSES = twMerge(`
				flex md:gap-[4.5rem] text-white
				${
					!isDesktop
						? 'z-[20] fixed flex-col w-0 gap-[3.2rem] bg-slate-600/80 pt-[7rem] [inset:0_0_0_auto] [transition:width_200ms_ease] [backdrop-filter:blur(2rem)_saturate(5)]'
						: ''
				}
				${navShow ? 'w-[24rem] [transition:width_500ms_ease]' : ''}
	`);

	const OVERLAY_CLASSES = twMerge(`
				fixed z-[12] w-0 bg-[hsl(0,0%,0%,0.55)] [inset:0_0_0_auto] [transition:width_30ms_linear]
				${navShow ? 'w-[100vw] [transition:width_500ms_ease-out]' : ''}
		`);

	return (
		<article className="w-[100%]">
			{/* OVERLAY FOR MOBILE AND TABLET VIEWS */}
			{!isDesktop && (
				<div onClick={navShowHandler} className={OVERLAY_CLASSES}>
					{/* Overlay here */}
				</div>
			)}

			{/* NAVBAR LINKS */}
			<nav className="flex w-[100%] items-center justify-between font-[500] lg:px-[2rem] ">
				{isDesktop && <button>Shop By Category</button>}

				<ul className={NAVLIST_CLASSES}>
					{!isDesktop && <img className="ml-[4rem] mb-[2rem] w-[16rem]" src={logo} alt="" />}
					<li className={!isDesktop ? 'ml-[4rem]' : ''}>Home</li>
					<li className={!isDesktop ? 'ml-[4rem]' : ''}>Categories</li>
					<li className={!isDesktop ? 'ml-[4rem]' : ''}>Product</li>
					<li className={!isDesktop ? 'ml-[4rem]' : ''}>Contact</li>
				</ul>

				{isDesktop && (
					<p>
						Free shipping on <span>Orders $50</span>
					</p>
				)}
			</nav>
		</article>
	);
};

export default NavBarLinks;
