import { useMediaQuery } from './hooks';
import Home from './pages/Home';

function App() {
	useMediaQuery();

	return <Home />;
}

export default App;
