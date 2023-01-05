import { LineChartOutlined } from '@ant-design/icons';
import { Divider, Table } from 'antd';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import styles from './insigts.module.scss';

const Insights = () => {
	const [options, setOptions] = useState({
		series: [44, 55, 13, 43],
		options: {
			chart: {
				width: 380,
				events: {
					mounted: (chart) => {
						chart.windowResizeHandler();
					},
				},
			},
			labels: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'],
			colors: ['#4472C4', '#ED7D31', '#A5A5A5', '#FFC000'],
			// responsive: [
			// 	{
			// 		breakpoint: 400,
			// 		options: {
			// 			chart: {
			// 				width: 200,
			// 			},
			// 			legend: {
			// 				position: 'bottom',
			// 			},
			// 		},
			// 	},
			// ],
			legend: {
				position: 'bottom',
				fontSize: '12px',
				fontFamily: 'Helvetica, Arial',
				fontWeight: 600,
			},
		},
	});
	console.log(setOptions);

	const [barOptions, setBarOptions] = useState({
		series: [
			{
				name: 'Components',
				data: [44, 55, 57, 56],
				color: '#4472C4',
			},
			{
				name: 'LED',
				data: [76, 85, 101, 98],
				color: '#ED7D31',
			},
			{
				name: 'IOT',
				data: [35, 41, 36, 26],
				color: '#A5A5A5',
			},
		],

		options: {
			chart: {
				width: '100%',
				height: 380,
				type: 'bar',
				toolbar: { show: false },
				events: {
					mounted: (chart) => {
						chart.windowResizeHandler();
					},
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					endingShape: 'rounded',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: ['Asia', 'Europe', 'North America', 'ANZ'],
			},
			yaxis: {
				title: {
					text: '$ (thousands)',
				},
			},
			fill: {
				opacity: 1,
			},

			tooltip: {
				y: {
					formatter: function (val) {
						return '$ ' + val + ' thousands';
					},
				},
			},
		},
		// reponsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		options: {
		// 			chart: {
		// 				width: 600,
		// 				height: '100%',
		// 			},
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 769,
		// 		options: {
		// 			chart: {
		// 				width: '100%',
		// 				height: '600',
		// 			},
		// 		},
		// 	},
		// ],
	});

	console.log(setBarOptions);

	const dataSource = [
		{
			key: '1',
			company: 'ABC Pte Ltd',
			contact: 'John',
			sales_revenue: '$2,392,000',
		},

		{
			key: '2',
			company: 'Godrej',
			contact: 'Vishnu',
			sales_revenue: '$2,392,000',
		},
		{
			key: '3',
			company: 'Tata Motors',
			contact: 'Alex',
			sales_revenue: '$2,392,000',
		},
		{
			key: '4',
			company: 'TVS',
			contact: 'Rahul',
			sales_revenue: '$2,392,000',
		},
		{
			key: '5',
			company: 'Honeywell',
			contact: 'Lee',
			sales_revenue: '$2,392,000',
		},
		{
			key: '6',
			company: 'Indian Oil',
			contact: 'Catherine',
			sales_revenue: '$2,392,000',
		},
		{
			key: '7',
			company: 'Bharat Electrical',
			contact: 'Sathish',
			sales_revenue: '$2,392,000',
		},
		{
			key: '8',
			company: 'Continental',
			contact: 'Alvin',
			sales_revenue: '$2,392,000',
		},
		{
			key: '9',
			company: 'Shenzhen Electricals',
			contact: 'Jimmy',
			sales_revenue: '$2,392,000',
		},
		{
			key: '10',
			company: 'Planet Electronics',
			contact: 'Mary',
			sales_revenue: '$2,392,000',
		},
		{
			key: '10',
			company: 'Global Components',
			contact: 'Kumar',
			sales_revenue: '$2,392,000',
		},
		{
			key: '11',
			company: 'IBM',
			contact: 'Frank',
			sales_revenue: '$2,392,000',
		},
		{
			key: '12',
			company: 'Panasonic',
			contact: 'Jane',
			sales_revenue: '$2,392,000',
		},
		{
			key: '13',
			company: 'Sony',
			contact: 'Olivia',
			sales_revenue: '$2,392,000',
		},
		{
			key: '14',
			company: 'Dell',
			contact: 'Thomas',
			sales_revenue: '$2,392,000',
		},
		{
			key: '15',
			company: 'Ritz',
			contact: 'Thierry',
			sales_revenue: '$2,392,000',
		},
		{
			key: '16',
			company: 'Tekcell',
			contact: 'Arun',
			sales_revenue: '$2,392,000',
		},
	];

	const columns = [
		{ title: '#', dataIndex: 'key', key: 'key' },
		{
			title: 'Company',
			dataIndex: 'company',
			key: 'company',
		},
		{
			title: 'Contact',
			dataIndex: 'contact',
			key: 'contact',
		},
		{
			title: 'Sales Revenue',
			dataIndex: 'sales_revenue',
			key: 'sales_revenue',
		},
	];

	return (
		<div className={styles['wrapper']}>
			<div className={styles['tabs']}>
				<LineChartOutlined />
				<p className={styles['tab']}>
					My Sales Performance:
					<span className={styles['tab-name']}>&nbsp;Insights</span>
				</p>
			</div>
			<Divider />
			<div className={styles['charts-wrapper']}>
				<div className={styles['card-wrapper']}>
					<p className={styles['card-title']}>Sales by Quater</p>
					<ReactApexChart
						options={options.options}
						series={options.series}
						type="pie"
						width="100%"
						height={500}
					/>
				</div>

				<div className={styles['card-wrapper']}>
					<p className={styles['card-title']}># of Orders (Breakdown)</p>
					<ReactApexChart
						options={barOptions.options}
						series={barOptions.series}
						type="bar"
						width="100%"
						height={450}
					/>
				</div>
			</div>
			<Divider />
			<p className={styles['card-title']}>Top Accounts</p>
			<Table dataSource={dataSource} columns={columns} scroll={{ x: 500 }} />
		</div>
	);
};

export default Insights;
