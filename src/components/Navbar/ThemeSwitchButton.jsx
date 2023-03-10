import { useLayoutEffect, useEffect } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { useThemeActions, createThemeStore } from '../../zustand-store/themeStore';

const ThemeSwitchButton = ({ display }) => {
	const { switchTheme, toggleDarkMode } = useThemeActions();
	const theme = createThemeStore((state) => state.theme);
	const isDarkMode = createThemeStore((state) => state.isDarkMode);

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	useEffect(() => {
		document.documentElement.classList.add('theme-transition');
	}, []);

	return (
		<button
			className={`rounded-[5rem] bg-[hsl(229,28%,15%)] max-md:scale-[0.8] ${display}`}
			onClick={() => {
				switchTheme();
				toggleDarkMode();
			}}
		>
			<div className="relative flex h-[2.2rem] w-[4.3rem] items-center justify-between gap-[0.6rem] [padding-inline:0.6rem_0.5rem] [padding-block:0.3rem]">
				<FaSun color="var(--text-header)" fontSize={'1.2rem'} />
				<BsFillMoonStarsFill color="pink" fontSize={'1rem'} />
				<span
					className={`
						absolute bottom-[0.37rem] aspect-square w-[1.5rem] rounded-[50%] bg-dark-ball transition-transform duration-[750ms] ease-in-out
						${isDarkMode ? 'translate-x-[1.75rem]' : ''}
					`}
				/>
			</div>
		</button>
	);
};

export default ThemeSwitchButton;
