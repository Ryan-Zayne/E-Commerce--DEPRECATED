import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsChevronRight } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { Button, Carousel, StarRating } from '../components/common';
import { useGetAllProducts } from '../hooks';

const ProductItemPage = () => {
	const [productCount, setProductCount] = useState(1);
	const { allProducts, allProductsArray } = useGetAllProducts();
	const { productId } = useParams();

	if (allProducts.some((item) => item.isLoading === true)) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (allProducts.some((item) => item.isError === true)) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: Product not found
			</h4>
		);
	}
	const productItem = allProductsArray.find((item) => item.id === Number(productId));

	const carouselItems = productItem.images.map((image) => (
		<Carousel.Item key={image}>
			<img src={image} alt="" />
		</Carousel.Item>
	));

	const carouselIndicators = productItem.images.map((image, index) => (
		<Carousel.Indicator
			key={image}
			index={index}
			className={
				'bg-[hsl(198,14%,14%)] hover:bg-[hsl(220,62%,31%)] hover:[box-shadow:0_0_5px_hsl(220,62%,31%)]'
			}
			onActiveClassName={'p-[0.4rem] w-[0.6rem] bg-[hsl(220,62%,31%)]'}
		/>
	));

	const handlePlus = () => productCount < productItem.stock && setProductCount((prev) => prev + 1);
	const handleMinus = () => productCount > 1 && setProductCount((prev) => prev - 1);

	return (
		<section className="p-[2rem_2rem_5rem]">
			<article className="">
				<h1 className="text-center font-roboto text-[2.6rem] font-[600]">{productItem.title}</h1>
				<Carousel
					as="div"
					outerClassName={'mt-[1rem] h-[30rem]'}
					innerClassName={'rounded-[0.7rem]'}
					images={productItem.images}
					arrowIcon={<BsChevronRight />}
					leftBtnClasses={'p-[0.7rem_0.3rem] text-[1.7rem]'}
					rightBtnClasses={'p-[0.7rem_0.3rem] text-[1.7rem]'}
				>
					<Carousel.ItemWrapper className={'brightness-[0.65]'}>
						{carouselItems}
					</Carousel.ItemWrapper>
					<Carousel.IndicatorWrapper>{carouselIndicators}</Carousel.IndicatorWrapper>
				</Carousel>
			</article>

			<article className="mt-[2.5rem] ">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-[2.4rem] font-[600]">{productItem.brand}</h2>
						<StarRating
							className="mt-[0.4rem] text-[1.6rem]"
							rating={productItem.rating}
							text={'reviews'}
						/>
					</div>
					<p className="text-[2.3rem] font-[500]">
						<sup>$</sup>
						{productItem.price}
						<sup>.00</sup>
					</p>
				</div>

				<div className="mt-[2rem]">
					<h2 className="text-[2.4rem] font-[600]">Description</h2>
					<p className="mt-[0.4rem] text-[1.5rem] font-[200]">{productItem.description}</p>

					<div className="mt-[3.5rem] flex items-center justify-between">
						<div className="flex w-[17rem] items-center justify-between rounded-[4rem] bg-carousel-btn p-[0.7rem_1.3rem] text-[1.9rem] font-[600] ">
							<button className="active:scale-[1.2]" onClick={handleMinus}>
								<AiOutlineMinus />
							</button>
							<p className="">{productCount}</p>
							<button className="active:scale-[1.2]" onClick={handlePlus}>
								<AiOutlinePlus />
							</button>
						</div>

						<div className="whitespace-nowrap font-[300] tracking-wide">
							<p>
								Only{' '}
								<span className="font-[500] text-heading">
									{productCount.stockCount ?? productItem.stock} Items
								</span>{' '}
								Left
							</p>
							<span>{`Don't miss it`}!</span>
						</div>
					</div>
				</div>

				<div className="mt-[4rem] flex justify-center gap-[3.5rem] font-[500] transition-none">
					<Button
						theme={'ghost'}
						variant={'shop'}
						className={
							'w-[15rem] p-[1.1rem_0] [box-shadow:0_0_0_1.3px_var(--brand-inverse)] hover:bg-secondary hover:text-dark'
						}
					>
						<p>Buy Now</p>
					</Button>

					<Button
						theme={'secondary'}
						variant={'shop'}
						className={
							'w-[15rem] p-[1.1rem_0] [box-shadow:0_0_0_1.3px_var(--brand-inverse)] hover:bg-transparent hover:text-white'
						}
					>
						<AiOutlineShoppingCart className="mr-[1rem] text-[2rem]" />
						<p>Add to Cart</p>
					</Button>
				</div>
			</article>
		</section>
	);
};

export default ProductItemPage;
