import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Store Object Initializtion
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storeObject = (set, get) => ({
	theme: prefersDark ? 'dark' : 'light',
	isDarKMode: () => get().theme === 'dark',

	actions: {
		switchTheme: () => {
			const newtheme = get().isDarKMode ? 'light' : 'dark';
			set({ theme: newtheme });
		},
		setIsDarkMode: (newState) => set({ isDarKMode: newState }),
	},
});

// Store Creation
const useThemeStore = create(
	persist(storeObject, {
		name: 'scheme',
		partialize: ({ actions, ...state }) => state,
	})
);

// Consumer Hooks
const useTheme = () => useThemeStore((state) => state.theme);
const useDarkMode = () => useThemeStore((state) => state.isDarKMode);
const useThemeActions = () => useThemeStore((state) => state.actions);

export { useTheme, useThemeActions, useDarkMode };
