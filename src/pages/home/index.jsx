import React from 'react';
import { Link } from 'react-router-dom';

import styles from './home.module.scss';

const Home = () => {
	const cards = [
		{
			key: 1,
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
					title: 'Get my team’s insights into our performance',
					to: '/sales-performance/insights',
				},
			],
		},

		{
			key: 2,
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
					title: 'View my YOY trends',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
					title: 'View my account-level record of transactions',
					to: '/sales-performance/insights',
				},
				{
					key: 3,
					title: 'View my team’s  MPN-level record of transactions',
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
					title: 'View my engagement insights',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
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
					title: 'View my RFQ stats by account',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
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
					title: 'View my MPN cost book',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
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
					title: 'View my Quote Summaries',
					to: '/sales-performance/insights',
				},
				{
					key: 2,
					title: 'View my Quote Book',
					to: '/sales-performance/insights',
				},
			],
		},
	];

	return (
		<div className={styles['home-wrapper']}>
			{cards.map((el) => (
				<div key={el.key} className={styles['card-parent']}>
					<div className={styles['card-inner-wrapper']}>
						<div className={styles['card-title']}>
							<h3 className={styles['title']}>{el.title}</h3>
							{el.sub_title}
						</div>
						<div className={styles['children-card-wrapper']}>
							{el.childrenCard.map((el) => (
								<div key={el.key} className={styles['card']}>
									<p className={styles['title']}>{el.title}</p>
									<Link className={styles['link']} to={el.to}>
										View Details
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
