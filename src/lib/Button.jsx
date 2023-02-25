import { twMerge } from 'tailwind-merge';

const Button = ({ theme = 'primary', variant = 'regular', size = 'md', children, className }) => {
	const semanticProps = (prop) => {
		switch (prop) {
			// Variants
			case 'regular':
				return 'rounded-[0.5rem]';
			case 'input':
				return 'rounded-[0_2.5rem_2.5rem_0]';
			// Themes
			case 'primary':
				return 'bg-primary';
			case 'secondary':
				return 'bg-secondary text-primary';
			// Sizes
			case 'sm':
				return 'p-[1.1rem_1.3rem]';
			case 'md':
				return 'p-[1.1rem_3.5rem]';
			case 'lg':
				return 'p-[1.1rem_4.5rem]';
			// Defualt
			default:
				return '';
		}
	};

	const BTN_CLASSES = twMerge(`
				flex items-center justify-center text-white
				${semanticProps(variant)}
				${semanticProps(theme)}
				${semanticProps(size)}
				${className ?? ''}
	`);

	return <button className={BTN_CLASSES}>{children}</button>;
};

export default Button;
