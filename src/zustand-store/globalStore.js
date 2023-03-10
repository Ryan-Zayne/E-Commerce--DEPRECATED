import { create } from 'zustand';

const storeObject = (set) => ({
	isNavShow: false,
	isSearchShow: false,
	currentSlide: 0,
	actions: {
		navShowHandler: () => set((state) => ({ isNavShow: !state.isNavShow })),
		searchShowHandler: () => set((state) => ({ isSearchShow: !state.isSearchShow })),
		nextSlide: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),
		previousSlide: () => set((state) => ({ currentSlide: state.currentSlide - 1 })),
		resetSlide: (resetValue) => set({ currentSlide: resetValue }),
	},
});

export const createGlobalStore = create(storeObject);

export const useGlobalActions = () => createGlobalStore((state) => state.actions);
