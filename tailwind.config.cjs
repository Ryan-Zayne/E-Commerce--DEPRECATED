/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1000px',
		},

		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
			},
			backgroundImage: {},

			fontFamily: {
				roboto: ['"Roboto Slab"', 'sans-serif'],
				rubik: ['"Rubik"', 'sans-serif'],
			},
		},
	},
};
