import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

import { ProductCard } from '../components/common';
import { useGetAllProducts } from '../hooks';

const AllProductsPage = () => {
	const { allProducts, allProductsArray } = useGetAllProducts();
	const navigate = useNavigate();

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
			<header className="mb-[8rem] mt-[3rem] flex flex-row-reverse items-center justify-center px-[4Srem]">
				<h1 className="mx-auto text-[3rem] font-[700] lg:text-[4rem]">All Products</h1>
				<button className="text-[3rem]" onClick={() => navigate(-1)}>
					<TiArrowBack />
				</button>
			</header>
			<article className="px-[3rem]">
				<ul className="grid grid-cols-[repeat(auto-fit,_minmax(24rem,1fr))] justify-items-center gap-[5rem_2rem]">
					{allRenderedProducts}
				</ul>
			</article>
		</section>
	);
};

export default AllProductsPage;
