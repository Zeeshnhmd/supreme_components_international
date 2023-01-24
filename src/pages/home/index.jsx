// import { ArrowRightOutlined, LineChartOutlined } from '@ant-design/icons';
// import React from 'react';
// import { Link } from 'react-router-dom';

// import styles from './home.module.scss';

// const Home = () => {
// const cards = [
// 	{
// 		key: 1,
// 		title: 'My Teams Sales Performance',
// 		sub_title: (
// 			<p className={styles['sub-title']}>
// 				General statistic of{' '}
// 				<b>
// 					Team's <br /> Sales Performance
// 				</b>
// 			</p>
// 		),
// 		childrenCard: [
// 			{
// 				key: 1,
// 				icon: <LineChartOutlined />,
// 				title: 'Get my team’s insights into our performance',
// 				to: '/sales-performance/insights',
// 			},
// 		],
// 	},

// 	{
// 		key: 2,
// 		title: 'My Sales Performance',
// 		sub_title: (
// 			<p className={styles['sub-title']}>
// 				General statistic of{' '}
// 				<b>
// 					My <br /> Sales Performance
// 				</b>
// 			</p>
// 		),
// 		childrenCard: [
// 			{
// 				key: 1,
// 				icon: <LineChartOutlined />,
// 				title: 'View my YOY trends',
// 				to: '/sales-performance/insights',
// 			},
// 			{
// 				key: 2,
// 				icon: <LineChartOutlined />,
// 				title: 'View my account-level record of transactions',
// 				to: '/sales-performance/insights',
// 			},
// 			{
// 				key: 3,
// 				icon: <LineChartOutlined />,
// 				title: 'View my team’s  MPN-level record of transactions',
// 				to: '/sales-performance/insights',
// 			},
// 		],
// 	},

// 	{
// 		key: 3,
// 		title: 'My Email Engagement',
// 		sub_title: (
// 			<p className={styles['sub-title']}>
// 				General statistic of{' '}
// 				<b>
// 					My <br /> Email Engagement
// 				</b>
// 			</p>
// 		),
// 		childrenCard: [
// 			{
// 				key: 1,
// 				icon: <LineChartOutlined />,
// 				title: 'View my engagement insights',
// 				to: '/sales-performance/insights',
// 			},
// 			{
// 				key: 2,
// 				icon: <LineChartOutlined />,
// 				title: 'View my customer email activity',
// 				to: '/sales-performance/insights',
// 			},
// 		],
// 	},

// 	{
// 		key: 4,
// 		title: 'My RFQ opportunities',
// 		sub_title: (
// 			<p className={styles['sub-title']}>
// 				General statistic of{' '}
// 				<b>
// 					My <br /> RFQ opportunities
// 				</b>
// 			</p>
// 		),
// 		childrenCard: [
// 			{
// 				key: 1,
// 				icon: <LineChartOutlined />,
// 				title: 'View my RFQ stats by account',
// 				to: '/sales-performance/insights',
// 			},
// 			{
// 				key: 2,
// 				icon: <LineChartOutlined />,
// 				title: 'View my RFQs by account',
// 				to: '/sales-performance/insights',
// 			},
// 		],
// 	},
// 	{
// 		key: 5,
// 		title: 'My Sources',
// 		sub_title: (
// 			<p className={styles['sub-title']}>
// 				General statistic of{' '}
// 				<b>
// 					My <br /> Sources
// 				</b>
// 			</p>
// 		),
// 		childrenCard: [
// 			{
// 				key: 1,
// 				icon: <LineChartOutlined />,
// 				title: 'View my MPN cost book',
// 				to: '/sales-performance/insights',
// 			},
// 			{
// 				key: 2,
// 				icon: <LineChartOutlined />,
// 				title: 'View the Sourcing Queue',
// 				to: '/sales-performance/insights',
// 			},
// 		],
// 	},
// 	{
// 		key: 6,
// 		title: 'My Quotes',
// 		sub_title: (
// 			<p className={styles['sub-title']}>
// 				General statistic of{' '}
// 				<b>
// 					My <br /> Quotes
// 				</b>
// 			</p>
// 		),
// 		childrenCard: [
// 			{
// 				key: 1,
// 				icon: <LineChartOutlined />,
// 				title: 'View my Quote Summaries',
// 				to: '/sales-performance/insights',
// 			},
// 			{
// 				key: 2,
// 				icon: <LineChartOutlined />,
// 				title: 'View my Quote Book',
// 				to: '/sales-performance/insights',
// 			},
// 		],
// 	},
// ];

// 	return (
// 		<div className={styles['home-wrapper']}>
// 			{cards.map((el) => (
// 				<div key={el.key} className={styles['card-parent']}>
// 					<div className={styles['card-inner-wrapper']}>
// 						<div className={styles['card-title']}>
// 							<h3 className={styles['title']}>{el.title}</h3>
// 							{el.sub_title}
// 						</div>
// 						<div className={styles['children-card-wrapper']}>
// 							{el.childrenCard.map((el) => (
// 								<div key={el.key} className={styles['card-wrapper']}>
// 									{/* <div className={styles['icons']}>{el.icon}</div> */}
// 									<div className={styles['card']}>
// 										<div className={styles['icons']}>{el.icon}</div>
// 										<p className={styles['title']}>{el.title}</p>
// 										<Link className={styles['link']} to={el.to}>
// 											View Details{' '}
// 											<ArrowRightOutlined className={styles['arrow-icon']} />
// 										</Link>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import {
	ArrowRightOutlined,
	LineChartOutlined,
	TeamOutlined,
} from '@ant-design/icons';

import styles from './home1.module.scss';

const Home = () => {
	const mySalesPerformance = [
		{
			key: 1,
			title: 'My Sales Performance',
			sub_title: (
				<p className={styles['sub-title']}>
					General statistic of{' '}
					<b>
						My <br /> Sales Performance
					</b>
				</p>
			),
			childrenCard: [
				{
					key: 1,
					icon: <LineChartOutlined />,
					title: 'View my YOY trends',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
					icon: <LineChartOutlined />,
					title: 'View my account-level record of transactions',
					to: '/sales-performance/insights',
				},
				{
					key: 3,
					icon: <LineChartOutlined />,
					title: 'View my team’s  MPN-level record of transactions',
					to: '/sales-performance/insights',
				},
			],
		},
		{
			key: 2,
			title: 'My Teams Sales Performance',
			sub_title: (
				<p className={styles['sub-title']}>
					General statistic of{' '}
					<b>
						Team's <br /> Sales Performance
					</b>
				</p>
			),
			childrenCard: [
				{
					key: 1,
					icon: <LineChartOutlined />,
					title: 'Get my team’s insights into our performance',
					to: '/sales-performance/insights',
				},
			],
		},
		{
			key: 3,
			title: 'My Email Engagement',
			sub_title: (
				<p className={styles['sub-title']}>
					General statistic of{' '}
					<b>
						My <br /> Email Engagement
					</b>
				</p>
			),
			childrenCard: [
				{
					key: 1,
					icon: <LineChartOutlined />,
					title: 'View my engagement insights',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
					icon: <LineChartOutlined />,
					title: 'View my customer email activity',
					to: '/sales-performance/insights',
				},
			],
		},

		{
			key: 4,
			title: 'My RFQ opportunities',
			sub_title: (
				<p className={styles['sub-title']}>
					General statistic of{' '}
					<b>
						My <br /> RFQ opportunities
					</b>
				</p>
			),
			childrenCard: [
				{
					key: 1,
					icon: <LineChartOutlined />,
					title: 'View my RFQ stats by account',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
					icon: <LineChartOutlined />,
					title: 'View my RFQs by account',
					to: '/sales-performance/insights',
				},
			],
		},
		{
			key: 5,
			title: 'My Sources',
			sub_title: (
				<p className={styles['sub-title']}>
					General statistic of{' '}
					<b>
						My <br /> Sources
					</b>
				</p>
			),
			childrenCard: [
				{
					key: 1,
					icon: <LineChartOutlined />,
					title: 'View my MPN cost book',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
					icon: <LineChartOutlined />,
					title: 'View the Sourcing Queue',
					to: '/sales-performance/insights',
				},
			],
		},
		{
			key: 6,
			title: 'My Quotes',
			sub_title: (
				<p className={styles['sub-title']}>
					General statistic of{' '}
					<b>
						My <br /> Quotes
					</b>
				</p>
			),
			childrenCard: [
				{
					key: 1,
					icon: <LineChartOutlined />,
					title: 'View my Quote Summaries',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
					icon: <LineChartOutlined />,
					title: 'View my Quote Book',
					to: '/sales-performance/insights',
				},
			],
		},
	];

	return (
		<div className={styles['home-wrapper']}>
			<div className={styles['main-cards']}>
				<div className={styles['customer']}>
					<TeamOutlined className={styles['customer-logo']} />
				</div>
				{mySalesPerformance.map((el) => (
					<div key={el.key} className={styles['card-parent']}>
						<div className={styles['card-inner-wrapper']}>
							<h3 className={styles['title']}>{el.title}</h3>
							<div key={el.key} className={styles['card-wrapper']}>
								{el.childrenCard.map((el) => (
									<div className={styles['card']}>
										<div className={styles['icons']}>{el.icon}</div>
										<p className={styles['title']}>{el.title}</p>
										<Link className={styles['link']} to={el.to}>
											View Details
											<ArrowRightOutlined className={styles['arrow-icon']} />
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
