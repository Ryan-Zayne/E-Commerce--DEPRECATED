import { create } from 'zustand';

const storeObject = (set) => ({
	currentSlide: 0,

	actions: {
		nextSlide: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),
		previousSlide: () => set((state) => ({ currentSlide: state.currentSlide - 1 })),
		resetSlide: (resetValue) => set({ currentSlide: resetValue }),
	},
});

const createGeneralStore = create(storeObject);

const useGeneralState = () => createGeneralStore((state) => state.currentSlide);

const useGeneralActions = () => createGeneralStore((state) => state.actions);

export { useGeneralState, useGeneralActions };
