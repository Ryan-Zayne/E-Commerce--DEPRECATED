import { useState, useEffect } from 'react';

const useMediaQuery = () => {
	const [mediaQueries, setMediaQueries] = useState({
		isMobile: window.matchMedia('(max-width: 767px').matches,
		isTablet: window.matchMedia('(min-width: 768px)').matches,
		isDesktop: window.matchMedia('(min-width: 1000px)').matches,
	});

	useEffect(() => {
		const mobileQuery = window.matchMedia('(max-width: 767px');
		const tabletQuery = window.matchMedia('(min-width: 768px)');
		const desktopQuery = window.matchMedia('(min-width: 1000px)');

		function handleMediaQueryChange() {
			setMediaQueries({
				isMobile: mobileQuery.matches,
				isTablet: tabletQuery.matches,
				isDesktop: desktopQuery.matches,
			});
		}

		mobileQuery.addEventListener('change', handleMediaQueryChange);
		tabletQuery.addEventListener('change', handleMediaQueryChange);
		desktopQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mobileQuery.removeEventListener('change', handleMediaQueryChange);
			tabletQuery.removeEventListener('change', handleMediaQueryChange);
			desktopQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	return mediaQueries;
};

export default useMediaQuery;
