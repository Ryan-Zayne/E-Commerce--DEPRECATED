import { useState, useEffect } from 'react';

const mobileQuery = window.matchMedia('(max-width: 767px)');
const tabletQuery = window.matchMedia('(min-width: 768px)');
const desktopQuery = window.matchMedia('(min-width: 1000px)');
const mediaQueryList = [mobileQuery, tabletQuery, desktopQuery];

const useMediaQuery = () => {
	const [mediaQueries, setMediaQueries] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: false,
	});

	useEffect(() => {
		handleMediaQueryChange(); // Set initial state

		function handleMediaQueryChange() {
			setMediaQueries({
				isMobile: mobileQuery.matches,
				isTablet: tabletQuery.matches,
				isDesktop: desktopQuery.matches,
			});
		}

		mediaQueryList.forEach((mediaQuery) =>
			mediaQuery.addEventListener('change', handleMediaQueryChange)
		);

		return () => {
			mediaQueryList.forEach((mediaQuery) =>
				mediaQuery.removeEventListener('change', handleMediaQueryChange)
			);
		};
	}, []);

	return mediaQueries;
};

export default useMediaQuery;
