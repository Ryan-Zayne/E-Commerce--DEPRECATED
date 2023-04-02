import Categories from './Categories';
import HotSalesProducts from './HotSalesProducts';
import RecentProducts from './RecentProducts';
import SimilarProducts from './SimilarProducts';

const Products = () => {
	return (
		<section id="Products" className="mt-[3rem] flex flex-col gap-[4rem]">
			<Categories />
			<HotSalesProducts />
			<RecentProducts />
			<SimilarProducts />
		</section>
	);
};

export default Products;
