import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useMediaQuery } from './hooks';

import Home from './pages/Home';

const queryClient = new QueryClient();

const App = () => {
	useMediaQuery();

	return (
		<QueryClientProvider client={queryClient}>
			<Home />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
