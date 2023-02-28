import { createContext, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

	function themeSwitcher() {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
	}

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);
	return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

ez;
