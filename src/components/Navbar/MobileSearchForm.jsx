import { BiSearchAlt2 } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';
import Button from '../../lib/Button';

const MobileSearchForm = ({ searchShow }) => {
	const FORM_CLASSES = twMerge(`
				mt-[1rem] px-[2rem] flex h-0 w-[100%] items-center overflow-hidden transition-[height] duration-[600ms] ease-out
				${searchShow ? 'h-[7rem] duration-500' : ''}
	`);

	return (
		<form className={FORM_CLASSES} onSubmit={(e) => e.preventDefault()}>
			<input
				className="w-[100%] rounded-[2.5rem_0_0_2.5rem] border-secondary py-[0.6rem] pl-[2.3rem] transition-[box-shadow] duration-200 [border-width:2px_0_2px_2px] placeholder:font-[500] focus-within:shadow-[1px_0_10px_2px_var(--color-secondary)]"
				type="text"
				name="Search"
				placeholder="Search for products..."
			/>
			<Button
				className="px-[2.1rem] text-[1.8rem] transition-colors duration-300 hover:bg-primary hover:text-secondary active:scale-[1.028]"
				variant={'input'}
				theme={'secondary'}
				size={'sm'}
			>
				<BiSearchAlt2 />
			</Button>
		</form>
	);
};

export default MobileSearchForm;
