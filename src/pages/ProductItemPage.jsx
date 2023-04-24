import { useParams } from 'react-router-dom';
import { useGetAllProducts } from '../hooks';
import ProductCard from '../components/common/ProductCard';

const ProductItemPage = () => {
	const { id } = useParams();
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

	const productItem = allProductsArray.find((item) => item.id === Number(id));

	return (
		<ProductCard
			image={productItem.images[2]}
			title={productItem.title}
			price={productItem.price}
			description={productItem.description}
			rating={productItem.rating}
		/>
	);
};
export default ProductItemPage;
