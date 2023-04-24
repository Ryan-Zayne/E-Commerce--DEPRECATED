import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { useMediaQuery } from './hooks';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import GlobalLayout from './components/common/GlobalLayout';
import ProductItem from './pages/ProductItemPage';

const App = () => {
	useMediaQuery();

	const routes = createRoutesFromElements(
		<Route path="/" element={<GlobalLayout />}>
			<Route index element={<Home />} />
			<Route path="all-products" element={<ProductsPage />} />
			<Route path="all-products/:id" element={<ProductItem />} />
		</Route>
	);

	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};

export default App;
