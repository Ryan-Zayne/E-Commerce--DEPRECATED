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

		function updateMatches() {
			setMediaQueries({
				isMobile: mobileQuery.matches,
				isTablet: tabletQuery.matches,
				isDesktop: desktopQuery.matches,
			});
		}

		mobileQuery.addEventListener('change', updateMatches);
		tabletQuery.addEventListener('change', updateMatches);
		desktopQuery.addEventListener('change', updateMatches);

		return () => {
			mobileQuery.removeEventListener('change', updateMatches);
			tabletQuery.removeEventListener('change', updateMatches);
			desktopQuery.removeEventListener('change', updateMatches);
		};
	}, []);

	return mediaQueries;
};

export default useMediaQuery;
