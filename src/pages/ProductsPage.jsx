import { ProductCard } from '../components/common';
import { useGetAllProducts } from '../hooks';

const ProductsPage = () => {
	const { allProducts, allProductsArray } = useGetAllProducts();

	if (allProducts.some((item) => item.isLoading)) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (allProducts.some((item) => item.isError)) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: Something went wrong
			</h4>
		);
	}

	const allRenderedProducts = allProductsArray.map((product) => (
		<ProductCard
			key={product.id}
			to={`${product.id}`}
			image={product.images[1]}
			title={product.title}
			price={product.price}
			description={product.description}
			rating={product.rating}
		/>
	));

	return (
		<section>
			<h1 className="mb-[8rem] mt-[5rem] text-center text-[3rem] font-[700]">All Products</h1>
			<article className="px-[3rem]">
				<ul className="grid grid-cols-[repeat(auto-fit,_minmax(24rem,1fr))] justify-items-center gap-[5rem_2rem]">
					{allRenderedProducts}
				</ul>
			</article>
		</section>
	);
};

export default ProductsPage;
