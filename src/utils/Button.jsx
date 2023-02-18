import { twMerge } from 'tailwind-merge';

const Button = ({ theme, variant, children, className, size }) => {
	const BTN_CLASSES = twMerge(`
			flex items-center justify-center text-white
		${
			(variant === 'regular' ? 'rounded-[0.5rem]' : '') ||
			(variant === 'input' ? 'rounded-[0_2.5rem_2.5rem_0]' : '')
		}
		${(theme === 'primary' ? 'bg-primary' : '') || (theme === 'secondary' ? 'bg-secondary text-black' : '')}
		${
			(size === 'sm' ? 'p-[1.1rem_1.4rem]' : '') ||
			(size === 'md' ? 'p-[1.1rem_3.7rem]' : '') ||
			(size === 'lg' ? 'p-[1.1rem_4.5rem]' : '')
		}
		${className ?? ''}

	`);

	return <button className={BTN_CLASSES}>{children}</button>;
};

export default Button;
