export const createGlobalStateSlice = (set) => ({
	isNavShow: false,
	isSearchShow: false,
	currentSlide: 0,
	globalActions: {
		navShowHandler: () => set((state) => ({ isNavShow: !state.isNavShow })),
		searchShowHandler: () => set((state) => ({ isSearchShow: !state.isSearchShow })),
		nextSlide: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),
		previousSlide: () => set((state) => ({ currentSlide: state.currentSlide - 1 })),
		goToSlide: (resetValue) => set({ currentSlide: resetValue }),
	},
});
