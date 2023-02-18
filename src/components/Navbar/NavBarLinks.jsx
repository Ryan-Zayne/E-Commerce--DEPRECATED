import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from '../../lib';

function NavBarLinks({ navShow, logo }) {
	const { isDesktop } = useMediaQuery();

	const NAV_CLASSES = twMerge(`
				flex md:gap-[4.5rem]
				${
					!isDesktop
						? 'z-[10] fixed flex-col w-0 gap-[3.2rem] bg-slate-600 pt-[7rem] [inset:0_0_0_auto] [transition:width_200ms_ease] [backdrop-filter:blur(3rem)]'
						: ''
				}
				${navShow ? 'w-[24rem] [transition:width_500ms_ease]' : ''}
	`);

	return (
		<nav className="flex w-[100%] items-center justify-between font-[500] lg:px-[2rem]">
			{isDesktop && <button>Shop By Category</button>}

			<ul className={NAV_CLASSES}>
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
	);
}

export default NavBarLinks;
