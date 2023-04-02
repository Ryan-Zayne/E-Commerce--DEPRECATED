const CarouselItem = ({ key, children }) => {
	return (
		<li key={key} className="inline-flex h-full w-full items-center justify-center">
			{children}
		</li>
	);
};
export default CarouselItem;
