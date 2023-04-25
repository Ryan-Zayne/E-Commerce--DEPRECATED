import { useParams } from 'react-router-dom';
import { useGetAllProducts } from '../hooks';
import Carousel from '../components/common/Carousel';

const ProductItemPage = () => {
	const { id } = useParams();

	// Used to retrieve a flattened array of all products and an array of objects that contains information about each product's loading and error status.
	const { allProducts, allProductsArray } = useGetAllProducts();

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

	const productItem = allProductsArray.find((item) => item.id === Number(id));
};
export default ProductItemPage;
