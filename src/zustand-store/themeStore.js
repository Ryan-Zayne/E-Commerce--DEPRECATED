import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Store Object Initializtion
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const storeObject = (set, get) => ({
	theme: prefersDark ? 'dark' : 'light',
	isDarkMode: prefersDark,

	actions: {
		switchTheme: () => {
			const newtheme = get().theme === 'dark' ? 'light' : 'dark';
			set({ theme: newtheme });
		},
		toggleDarkMode: () => {
			const newMode = get().theme === 'dark';
			set({ isDarkMode: newMode });
		},
	},
});

// Store Creation
export const createThemeStore = create(
	persist(storeObject, {
		name: 'scheme',
		partialize: ({ actions, ...state }) => state,
	})
);

// Consumer Hooks
const useThemeState = () => {
	const theme = createThemeStore((state) => state.theme);
	const isDarkMode = createThemeStore((state) => state.isDarkMode);
	return { theme, isDarkMode };
};

// Actions hook
const useThemeActions = () => createThemeStore((state) => state.actions);

export { useThemeState, useThemeActions };
