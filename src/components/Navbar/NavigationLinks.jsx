import { useEffect } from 'react';
import { BsChevronDoubleRight, BsMenuButtonFill } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import { useDesktopQuery } from '../../hooks';

import { useGlobalActions, useGlobalStore } from '../../zustand-store/globalStore';

const NavigationLinks = ({ logo }) => {
	const isDesktop = useDesktopQuery();
	const isNavShow = useGlobalStore((state) => state.isNavShow);
	const { navShowHandler } = useGlobalActions();

	const styles = {
		NAVLIST_CLASSES: twMerge(`
				flex md:gap-[4.5rem]
				${
					!isDesktop
						? 'z-[100] fixed text-[1.4rem] md:text-[1.6rem] text-[whitesmoke] flex-col w-0 gap-[3.2rem] bg-navbar pt-[7rem] [inset:0_0_0_auto] [transition:width_200ms_ease] [backdrop-filter:blur(2rem)_saturate(5)]'
						: ''
				}
				${isNavShow ? 'w-[min(21rem,_56%)] [transition:width_500ms_ease]' : ''}
		`),

		OVERLAY_CLASSES: twMerge(`
				fixed z-[80] w-0 bg-[hsl(0,0%,0%,0.6)] [inset:0_0_0_auto]
				${isNavShow ? 'w-screen' : ''}
		`),
	};

	useEffect(() => {
		if (isNavShow) {
			document.body.classList.add('overflow-hidden');
		}
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [isNavShow]);

	return (
		<article id="Navigation Links" className="w-full">
			{/* OVERLAY FOR MOBILE AND TABLET VIEWS */}
			{!isDesktop && (
				<div onClick={navShowHandler} className={styles.OVERLAY_CLASSES}>
					{/* Overlay here */}
				</div>
			)}

			{/* NAVIGATION LINKS */}
			<nav className="flex w-[100%] items-center justify-between font-[500] lg:pr-[2rem] ">
				{isDesktop && (
					<div id="Categories" className="relative z-50">
						<button className="flex w-[28rem] items-center gap-[1rem] rounded-[0.5rem_0.5rem_0_0] bg-heading p-[1rem_1.5rem] font-[500] text-[var(--color-primary)]">
							<BsMenuButtonFill className="text-[2rem]" />
							Shop By Category
						</button>
						<ul className="absolute min-h-[41.4rem] w-full bg-body px-[2rem] pt-[5rem] font-[400] [box-shadow:0_0_3px_0.1px_var(--carousel-dot)]">
							<li className="flex items-center justify-between py-[1rem] [border-bottom:1px_solid_var(--color-primary)]">
								<p>All Products</p>
								<BsChevronDoubleRight />
							</li>
							<li className="flex items-center justify-between py-[1rem] [border-bottom:1px_solid_var(--color-primary)]">
								<p>Smartphones</p>
								<BsChevronDoubleRight />
							</li>
							<li className="flex items-center justify-between py-[1rem] [border-bottom:1px_solid_var(--color-primary)]">
								<p>Laptops</p>
								<BsChevronDoubleRight />
							</li>
							<li className="flex items-center justify-between py-[1rem] [border-bottom:1px_solid_var(--color-primary)]">
								<p>Men{`'`}s Watches</p>
								<BsChevronDoubleRight />
							</li>
							<li className="flex items-center justify-between py-[1rem] [border-bottom:1px_solid_var(--color-primary)]">
								<p>Women{`'`}s Watches</p>
								<BsChevronDoubleRight />
							</li>
						</ul>
					</div>
				)}

				<ul className={styles.NAVLIST_CLASSES}>
					{!isDesktop && (
						<img className="ml-[4rem] mb-[2rem] w-[13rem] md:w-[16rem]" src={logo} alt="" />
					)}

					<li className={`${!isDesktop ? 'pl-[4rem]' : ''}`}>Categories</li>
					<li className={`${!isDesktop ? 'pl-[4rem]' : ''}`}>Home</li>
					<li className={`${!isDesktop ? 'pl-[4rem]' : ''}`}>Product</li>
					<li className={`${!isDesktop ? 'pl-[4rem]' : ''}`}>Contact</li>
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

export default NavigationLinks;
