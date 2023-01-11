import { useState, useEffect, useRef } from 'react';
import { LineChartOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import ReactApexChart from 'react-apexcharts';
import { AgGridReact } from 'ag-grid-react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import styles from './insigts.module.scss';

const Insights = () => {
	const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

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

			legend: {
				position: 'bottom',
				fontSize: '12px',
				fontFamily: 'Helvetica, Arial',
				fontWeight: 600,
			},
		},
	});
	// console.log(setOptions);

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
	});

	// console.log(setBarOptions);

	const gridRef = useRef();

	var dateFilterParams = {
		comparator: (filterLocalDateAtMidnight, cellValue) => {
			var dateAsString = cellValue;
			if (dateAsString == null) return -1;
			var dateParts = dateAsString.split('/');
			var cellDate = new Date(
				Number(dateParts[2]),
				Number(dateParts[1]) - 1,
				Number(dateParts[0])
			);
			if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
				return 0;
			}
			if (cellDate < filterLocalDateAtMidnight) {
				return -1;
			}
			if (cellDate > filterLocalDateAtMidnight) {
				return 1;
			}
		},
		browserDatePicker: true,
	};

	const [fromDate, setFromDate] = useState('');
	const [toDate, setToDate] = useState('');
	const [loading, setLoading] = useState(false);
	const [rowData, setRowData] = useState([]);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				'https://www.ag-grid.com/example-assets/olympic-winners.json'
			);
			const data = await response.json();
			setRowData(data);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const columnDefs = [
		{ field: 'age' },
		{ field: 'athlete' },
		{ field: 'bronze' },
		{ field: 'country' },
		{
			field: 'date',
			filter: 'agDateColumnFilter',
			filterParams: dateFilterParams,
		},
		{ field: 'gold' },
		{ field: 'silver' },
		{ field: 'sport' },
		{ field: 'total' },
		{ field: 'year' },
	];

	const getType = () => {
		if (fromDate !== '' && toDate !== '') return 'inRange';
		else if (fromDate !== ' ') return 'greaterThan';
		else if (toDate !== '') return 'lessThan';
	};

	useEffect(() => {
		var dateFilterComponent = gridRef.current.api?.getFilterInstance('date');
		dateFilterComponent?.setModel({
			type: getType(),
			dateFrom: fromDate ? fromDate : toDate,
			dateTo: toDate,
		});
		gridRef.current.api?.onFilterChanged();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fromDate, toDate]);

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

			<div
				className="ag-theme-alpine"
				style={{ height: '500px', marginBottom: '50px' }}
			>
				{loading ? (
					<div className={styles['spinner-wrapper']}>
						<Spin indicator={antIcon} />
					</div>
				) : (
					<>
						<div className={styles['date-range-wrapper']}>
							<p className={styles['label']}>From:</p>
							<input
								onChange={(e) => setFromDate(e.target.value)}
								type="date"
							/>
							<p className={styles['label']}>To:</p>
							<input onChange={(e) => setToDate(e.target.value)} type="date" />
						</div>
						<AgGridReact
							ref={gridRef}
							rowData={rowData}
							columnDefs={columnDefs}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Insights;
