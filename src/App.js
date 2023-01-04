import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/home';
import Insights from './pages/my-sales-peformance/insights';
import Trends from './pages/my-sales-peformance/trends';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sales-performance/insights" element={<Insights />} />
				<Route path="/sales-performance/trends" element={<Trends />} />
			</Routes>
		</Layout>
	);
}

export default App;
