import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ theme = 'primary', variant = 'regular', size = 'md', className, text, children }) => {
	const semanticVariants = {
		regular: 'rounded-[0.5rem]',
		input: 'rounded-[0_2.5rem_2.5rem_0]',
		cart: 'rounded-[0.8rem]',
	};

	const semanticThemes = {
		primary: 'bg-primary text-white',
		secondary: 'bg-secondary text-dark',
		ghost: 'bg-transparent',
	};

	const semanticSizes = {
		sm: 'p-[1.1041rem_1.3rem]',
		md: 'p-[1.1rem_3.5rem]',
		lg: 'p-[1.1rem_4.5rem]',
	};

	const BTN_CLASSES = twMerge(`
				flex items-center justify-center
				${semanticVariants[variant] ?? ''}
				${semanticThemes[theme] ?? ''}
				${semanticSizes[size] ?? ''}
				${className ?? ''}
	`);

	return <button className={BTN_CLASSES}>{children ?? text}</button>;
};

export default memo(Button); // To prevent forced re-renders when no props change ;
