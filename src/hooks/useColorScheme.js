import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useColorScheme = () => {
	const { theme } = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

	useEffect(() => {
		if (theme === 'dark') {
			setIsDarkMode(true);
		} else {
			setIsDarkMode(false);
		}
	}, [theme]);

	return { isDarkMode };
};
export default useColorScheme;
