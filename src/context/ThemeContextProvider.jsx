import { createContext, useMemo, useContext, useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

// Context Creation
const ThemeContext = createContext(null);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Context Provider Wrapper
const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useLocalStorage('theme', prefersDark ? 'dark' : 'light');
	const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Context Custom Hook
const useThemeContext = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

	useEffect(() => {
		if (theme === 'dark') {
			setIsDarkMode(true);
		} else {
			setIsDarkMode(false);
		}
	}, [theme]);

	return { isDarkMode, theme, setTheme };
};

export { ThemeContextProvider, useThemeContext };
