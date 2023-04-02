import { useState, useEffect } from 'react';

const mobileQuery = window.matchMedia('(max-width: 767px)');
const tabletQuery = window.matchMedia('(min-width: 768px)');
const desktopQuery = window.matchMedia('(min-width: 1000px)');

export const useMobileQuery = () => {
	const [isMobile, setIsMobile] = useState(() => mobileQuery.matches);

	const handleMediaQueryChange = () => setIsMobile(mobileQuery.matches);

	useEffect(() => {
		handleMediaQueryChange(); // Set initial state

		mobileQuery.addEventListener('change', handleMediaQueryChange);

		return () => mobileQuery.removeEventListener('change', handleMediaQueryChange);
	}, []);

	return isMobile;
};

export const useTabletQuery = () => {
	const [isTablet, setIsTablet] = useState(() => tabletQuery.matches);

	const handleMediaQueryChange = () => setIsTablet(tabletQuery.matches);

	useEffect(() => {
		handleMediaQueryChange(); // Set initial state

		tabletQuery.addEventListener('change', handleMediaQueryChange);

		return () => tabletQuery.removeEventListener('change', handleMediaQueryChange);
	}, []);

	return isTablet;
};

export const useDesktopQuery = () => {
	const [isDesktop, setIsDesktop] = useState(() => desktopQuery.matches);

	const handleMediaQueryChange = () => setIsDesktop(desktopQuery.matches);

	useEffect(() => {
		handleMediaQueryChange(); // Set initial state

		desktopQuery.addEventListener('change', handleMediaQueryChange);

		return () => desktopQuery.removeEventListener('change', handleMediaQueryChange);
	}, []);

	return isDesktop;
};

// // Trying out useReducer hook for fun
// const initialState = {
// 	isMobile: mobileQuery.matches,
// 	isTablet: tabletQuery.matches,
// 	isDesktop: desktopQuery.matches,
// };

// const ACTIONS = {
// 	SET_MOBILE: 'setMobile',
// 	SET_TABLET: 'setTablet',
// 	SET_DESKTOP: 'setDesktop',
// };

// const reducer = (state = initialState, action = {}) => {
// 	switch (action.type) {
// 		case ACTIONS.SET_MOBILE: {
// 			return { ...state, isMobile: mobileQuery.matches };
// 		}
// 		case ACTIONS.SET_TABLET: {
// 			return { ...state, isTablet: tabletQuery.matches };
// 		}
// 		case ACTIONS.SET_DESKTOP: {
// 			return { ...state, isDesktop: desktopQuery.matches };
// 		}
// 		default:
// 			throw new Error(`Action type "${action.type}" not found: `);
// 	}
// };
