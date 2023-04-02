import { useFetch } from '../../hooks';
import ProductsCard from './ProductsCard';

const SimilarProducts = () => {
	const products1 = useFetch({
		key: ['similar-products', 'motorcycles'],
		url: '/products/category/motorcycle',
		staleTime: Infinity,
	});

	const products2 = useFetch({
		key: ['similar-products', 'mens-watches'],
		url: '/products/category/mens-watches',
		staleTime: Infinity,
	});

	if (products1.isLoading) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (products1.isError) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: {products2.error.message}
			</h4>
		);
	}

	const renderedProducts1 = products1.data.products.map((product) => (
		<ProductsCard
			key={product.images[0]}
			image={product.images[0]}
			title={product.title}
			price={product.price}
			description={product.description}
		/>
	));

	const renderedProducts2 = products2.data.products.map((product) => (
		<ProductsCard
			key={product.images[1]}
			image={product.images[1]}
			title={product.title}
			price={product.price}
			description={product.description}
		/>
	));

	return (
		<article id="Similar Products You Might Like" className="flex flex-col gap-[2rem] px-[3rem]">
			<h2 className="text-[2rem] font-[700] max-md:text-center">Similar Products You Might Like</h2>
			<ul className="grid grid-cols-[repeat(auto-fit,_minmax(23rem,1fr))] justify-items-center gap-[3rem_1.5rem]">
				{renderedProducts1.concat(renderedProducts2)}
			</ul>
		</article>
	);
};
export default SimilarProducts;
