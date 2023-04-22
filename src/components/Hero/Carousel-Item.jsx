const CarouselItem = ({ children, className }) => {
	return (
		<li className={`inline-flex h-full w-full items-center justify-center ${className ?? ''}`}>
			{children}
		</li>
	);
};
export default CarouselItem;
