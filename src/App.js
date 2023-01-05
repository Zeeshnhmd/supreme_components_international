import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/home';
import Journey from './pages/home/journey';
import Insights from './pages/my-sales-peformance/insights';
import Trends from './pages/my-sales-peformance/trends';

function App() {
	const userTypes = [
		{ id: '1', type: 'SR' },
		{ id: '2', type: 'SM' },
		{ id: '3', type: 'CE' },
		{ id: '4', type: 'S' },
		{ id: '5', type: 'Admin' },
	];

	const [userType, setUserType] = useState('SR');

	return (
		<Layout userTypes={userTypes} userType={userType} setUserType={setUserType}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/my-journey" element={<Journey userType={userType} />} />
				<Route path="/sales-performance/insights" element={<Insights />} />
				<Route path="/sales-performance/trends" element={<Trends />} />
			</Routes>
		</Layout>
	);
}

export default App;
