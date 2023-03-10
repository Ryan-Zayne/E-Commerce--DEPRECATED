import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Store Object Initializtion
const storeObject = (set, get) => ({
	theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
	isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,

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

// Actions hook
export const useThemeActions = () => createThemeStore((state) => state.actions);
