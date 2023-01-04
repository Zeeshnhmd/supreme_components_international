import { LineChartOutlined } from '@ant-design/icons';
import { Col, Row, Table } from 'antd';

import styles from './insigts.module.scss';

const Insights = () => {
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
			<Row className={styles['charts-wrapper']}>
				<Col span={12}>
					<div className={styles['card-wrapper']}></div>
				</Col>
				<Col span={12}>
					<div className={styles['card-wrapper']}></div>
				</Col>
			</Row>

			<Table dataSource={dataSource} columns={columns} />
		</div>
	);
};

export default Insights;
