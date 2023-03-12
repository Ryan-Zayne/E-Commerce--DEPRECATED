import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from '../../hooks';
import { useGlobalStore, useGlobalActions } from '../../zustand-store/globalStore';

const NavBarLinks = ({ logo }) => {
	const { isDesktop } = useMediaQuery();
	const isNavShow = useGlobalStore((state) => state.isNavShow);

	const { navShowHandler } = useGlobalActions();

	const styles = {
		NAVLIST_CLASSES: twMerge(`
				flex md:gap-[4.5rem]
				${
					!isDesktop
						? 'z-[100] fixed text-[1.4rem] md:text-[1.6rem] text-body flex-col w-0 gap-[3.2rem] bg-navbar pt-[7rem] [inset:0_0_0_auto] [transition:width_200ms_ease] [backdrop-filter:blur(2rem)_saturate(5)]'
						: ''
				}
				${isNavShow ? 'w-[min(21rem,_56%)] [transition:width_500ms_ease]' : ''}
		`),

		OVERLAY_CLASSES: twMerge(`
				fixed z-[80] w-0 bg-[hsl(0,0%,0%,0.6)] [inset:0_0_0_auto]
				${isNavShow ? 'w-screen' : ''}
		`),
	};

	return (
		<article className="w-full">
			{/* OVERLAY FOR MOBILE AND TABLET VIEWS */}
			{!isDesktop && (
				<div onClick={navShowHandler} className={styles.OVERLAY_CLASSES}>
					{/* Overlay here */}
				</div>
			)}

			{/* NAVBAR LINKS */}
			<nav className="flex w-[100%] items-center justify-between font-[500] lg:px-[2rem] ">
				{isDesktop && <button>Shop By Category</button>}

				<ul className={styles.NAVLIST_CLASSES}>
					{!isDesktop && (
						<img className="ml-[4rem] mb-[2rem] w-[13rem] md:w-[16rem]" src={logo} alt="" />
					)}
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
