import { useThemeStore } from '../../zustand-store/themeStore';
import { Button } from '../common';

const categories = [
	{
		title: 'SmartPhones',
		image: 'https://res.cloudinary.com/djvestif4/image/upload/v1679955651/Ecommerce/Thumbnails/smartphone-transformed_jbfngh.png',
		bg_light: 'bg-orange-400',
		bg_dark: 'bg-[hsl(27,96%,33%)]',
	},
	{
		title: 'Laptops',
		image: 'https://res.cloudinary.com/djvestif4/image/upload/v1679955551/Ecommerce/Thumbnails/laptop-transformed_dhamlu.png',
		bg_light: 'bg-gray-400',
		bg_dark: 'bg-[hsl(200,6%,31%)]',
	},
	{
		title: 'Vehicles',
		image: 'https://res.cloudinary.com/djvestif4/image/upload/v1679958960/Ecommerce/Thumbnails/car-transformed.webp',
		bg_light: 'bg-purple-400',
		bg_dark: 'bg-[hsl(270,95%,25%)]',
	},
	{
		title: 'Watches',
		image: 'https://res.cloudinary.com/djvestif4/image/upload/v1679958960/Ecommerce/Thumbnails/watches-transformed.webp',
		bg_light: 'bg-cyan-400',
		bg_dark: 'bg-[hsl(188,86%,38%)]',
	},
	{
		title: 'Digital Lighting',
		image: 'https://res.cloudinary.com/djvestif4/image/upload/v1679959702/Ecommerce/Thumbnails/lighting-transformed.webp',
		bg_light: 'bg-green-300',
		bg_dark: 'bg-[hsl(151,76%,26%)]',
	},
];

const Categories = () => {
	const isDarkMode = useThemeStore((state) => state.isDarkMode);

	const renderedCategories = categories.map((category) => (
		<li
			key={category.title}
			className={`flex justify-between gap-[1.5rem] rounded-[5rem] p-[2rem] transition-transform duration-[800ms] ease-in-out hover:scale-[1.09] ${
				isDarkMode ? category.bg_dark : category.bg_light
			}`}
		>
			<div className="flex min-w-[12rem] shrink-0 flex-col justify-center gap-[0.5rem] lg:gap-[1rem]">
				<h3 className="text-center text-[1.8rem] lg:text-[2rem]">{category.title}</h3>
				<Button
					text={'Shop Now'}
					variant={'shop'}
					className="bg-body p-[0.8rem] text-[var(--text-body)] active:translate-y-[0.15rem] lg:p-[0.8rem_2.7rem] lg:text-[2rem]"
				/>
			</div>
			<div className="flex w-[12rem] items-center lg:w-[15rem]">
				<img src={category.image} alt="" />
			</div>
		</li>
	));

	return (
		<section className="mt-[6rem] px-[4rem] lg:px-[7rem]">
			<h2 className="mb-[3rem] text-center text-[2.5rem] font-[600] lg:text-[4rem]">
				All Categories
			</h2>
			<ul className="grid auto-rows-[17rem] grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] justify-center gap-[3rem] lg:auto-rows-[20rem] lg:grid-cols-[repeat(3,_minmax(30rem,1fr))]">
				{renderedCategories}
			</ul>
		</section>
	);
};
export default Categories;
