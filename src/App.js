import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout';
import Journey from './pages/home/journey';
import Insights from './pages/my-sales-peformance/insights';

import './styles/index.scss';

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
				{/* <Route path="/" element={<Journey userType={userType} />} /> */}
				{/* <Route path="/my-journey" element={<Journey userType={userType} />} /> */}

				<Route
					path="/sales-performance"
					element={<h1 className="title">Sales Performance</h1>}
				/>
				<Route path="/sales-performance/insights" element={<Insights />} />
				<Route
					path="/sales-performance/trends"
					element={<h1 className="title">Trends</h1>}
				/>
				<Route
					path="/sales-performance/customer-level"
					element={<h1 className="title">Customer Level</h1>}
				/>
				<Route
					path="/sales-performance/mnp-level"
					element={<h1 className="title">MNP Level</h1>}
				/>

				<Route
					path="/email-engagement"
					element={<h1 className="title">Email Engagement</h1>}
				/>
				<Route
					path="/email-engagement/customer-level"
					element={<h1 className="title">email-engagement/customer-level</h1>}
				/>
				<Route
					path="/email-engagement/contact-level"
					element={<h1 className="title">email-engagement/contact-level</h1>}
				/>
				<Route
					path="/email-engagement/conversation-statics"
					element={
						<h1 className="title">email-engagement/conversation-staticsl</h1>
					}
				/>

				<Route
					path="/rfq-opportunities"
					element={<h1 className="title">/rfq-opportunities</h1>}
				/>
				<Route
					path="/rfq-opportunities/rfq-stats"
					element={<h1 className="title">/rfq-opportunities/rfq-stats</h1>}
				/>
				<Route
					path="/rfq-opportunities/rfq-accounts"
					element={<h1 className="title">/rfq-opportunities/rfq-accounts</h1>}
				/>

				<Route
					path="/my-sources"
					element={<h1 className="title">/my-sources</h1>}
				/>
				<Route
					path="/my-sources/mpn-queue"
					element={<h1 className="title">/my-sources/mpn-queues</h1>}
				/>
				<Route
					path="/my-sources/mnp-cost-book"
					element={<h1 className="title">/my-sources/mnp-cost-book</h1>}
				/>

				<Route
					path="/my-quotes"
					element={<h1 className="title">/my-quotes</h1>}
				/>
				<Route
					path="/my-quotes/quote-summary"
					element={<h1 className="title">/my-quotes/quote-summary</h1>}
				/>
				<Route
					path="/my-quotes/mnp-quote-book"
					element={<h1 className="title">/my-quotes/mnp-quote-book</h1>}
				/>
			</Routes>
		</Layout>
	);
}

export default App;
