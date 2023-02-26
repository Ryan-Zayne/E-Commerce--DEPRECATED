import { DarkModeButton } from './lib';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<Home />
			<DarkModeButton display={'hidden'} />
		</>
	);
};

export default App;
