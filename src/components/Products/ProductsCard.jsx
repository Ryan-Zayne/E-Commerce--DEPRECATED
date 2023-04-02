import { FiHeart } from 'react-icons/fi';
import { IoMdStar } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';
import { useThemeStore } from '../../zustand-store/themeStore';
import Button from '../common/Button';
import Card from '../common/Card';

const ProductCard = ({ image, title, price, description, rating }) => {
	const isDarkMode = useThemeStore((state) => state.isDarkMode);

	return (
		<Card
			as={'li'}
			className={twMerge(`
				group/card w-[min(100%,25rem)] rounded-[1.2rem] transition-all duration-500 ease-in-out hover:scale-[1.03]
				${
					isDarkMode
						? 'hover:bg-primary hover:[box-shadow:0_0_6px_0px_var(--carousel-dot)]'
						: 'hover:[box-shadow:0_0_6px_0_hsl(60,_100%,_0%,_1)]'
				}
				`)}
		>
			<Card.Body>
				<div className="relative h-[18rem] w-[100%]">
					<button
						id="Wishlist Icon"
						className="group/btn absolute bottom-[1.3rem] right-[1.3rem] z-[1] rounded-[50%] bg-primary p-[0.7rem] opacity-0 transition-opacity duration-[1s] group-hover/card:opacity-100"
					>
						<FiHeart className="text-[1.7rem] text-carousel-dot active:scale-[1.2] group-hover/btn:text-heading" />
					</button>

					<img
						className="h-full rounded-[0.8rem_0.8rem_0_0] brightness-[0.9]"
						src={image}
						alt=""
					/>
				</div>
				<div className="px-[1.4rem] pt-[1rem]">
					<header className="flex min-h-[5rem] items-center justify-between font-[600]">
						<h3>{title}</h3>
						<span>
							<sup>$</sup>
							{price}
							<sup>.00</sup>
						</span>
					</header>
					<p className="mt-[0.5rem] min-h-[6rem] max-w-[30ch] text-[1rem]">{description}</p>

					<div className="mt-[1rem] flex items-center text-[1.2rem]">
						{[...Array(5)].map((icon, index) => (
							// eslint-disable-next-line react/no-array-index-key
							<IoMdStar key={index} color="var(--text-header)" />
						))}
						<span className="ml-[1rem]">{rating}</span>
					</div>
				</div>
			</Card.Body>

			<Card.Footer>
				<div className="p-[1.3rem_1rem_1rem]">
					<hr className="h-[1.8px] bg-carousel-dot opacity-0 group-hover/card:opacity-100" />
					<Button
						variant={'cart'}
						theme={'secondary'}
						text={'Add to Cart'}
						className={
							'mt-[1rem] p-[0.8rem_1.3rem] text-[1.3rem] font-[500] active:translate-y-[0.15rem]'
						}
					/>
				</div>
			</Card.Footer>
		</Card>
	);
};

export default ProductCard;
