import { CaretRightOutlined, HomeOutlined } from '@ant-design/icons';
import { Avatar, Col, Collapse, Divider, Row } from 'antd';

import styles from './journey.module.scss';

const { Panel } = Collapse;

const Journey = () => {
	const mySalesPerformance = [
		{ id: '1', title: 'Get insights into my performance' },
		{ id: '2', title: 'View my YOY trends' },
		{ id: '3', title: 'View Account-level record of transactions' },
		{ id: '4', title: 'View MPN-level record of transactions' },
	];

	const myCustomer = [
		{
			id: 1,
			title: 'My Email Engagement',
			data: [
				{
					id: '1',
					name: 'View customer email activity',
				},
				{
					id: '2',
					name: 'View contact email activity',
				},
				{
					id: '3',
					name: 'View conversation statistics',
				},
			],
		},
		{
			id: 2,
			title: 'My RFQ opportunities',
			data: [
				{
					id: '1',
					name: 'View my RFQ stats by account',
				},
				{
					id: '2',
					name: 'View my RFQs by account',
				},
			],
		},
		{
			id: 3,
			title: 'My Quotes',
			data: [
				{
					id: '1',
					name: 'View my Quote Summaries',
				},
				{
					id: '2',
					name: 'View my Quote Book',
				},
			],
		},
		{
			id: 4,
			title: 'My Sources',
			data: [
				{
					id: '1',
					name: 'View my MPN cost book',
				},
				{
					id: '2',
					name: 'View the Sourcing Queue',
				},
			],
		},
	];

	return (
		<div className={styles['wrapper']}>
			<div className={styles['tabs']}>
				<HomeOutlined />
				<p className={styles['tab']}>
					Home:
					<span className={styles['tab-name']}>&nbsp;My Journey</span>
				</p>
			</div>
			<Divider />
			<Row gutter={32} className={styles['trees-wrapper']}>
				<Col sm={24} md={12}>
					<div className={styles['tree-wrapper']}>
						<div className={styles['user-info']}>
							<Avatar
								size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64 }}
								src="https://i.pravatar.cc/150?img=1"
							/>

							<p className={styles['user-name']}>Me</p>
						</div>
						<Collapse
							bordered={false}
							defaultActiveKey={['1']}
							expandIcon={({ isActive }) => (
								<CaretRightOutlined rotate={isActive ? 90 : 0} />
							)}
							className={styles['collapse-wrapper']}
						>
							<Panel
								className={styles['collapse-panel']}
								header={
									<div className={styles['panel-header-wrapper']}>
										<p className={styles['panel-header']}>
											My Sales Performance
										</p>
									</div>
								}
								key="1"
							>
								{mySalesPerformance.map((el) => (
									<div key={el.id} className={styles['card']}>
										<p className={styles['card-name']}>{el.title}</p>
									</div>
								))}
							</Panel>
						</Collapse>
					</div>
				</Col>
				<Col sm={24} md={12}>
					<div className={styles['tree-wrapper']}>
						<div className={styles['user-info']}>
							<Avatar
								size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64 }}
								src="https://i.pravatar.cc/150?img=7"
							/>

							<p className={styles['user-name']}>My Customer</p>
						</div>
						<Collapse
							bordered={false}
							defaultActiveKey={['1']}
							expandIcon={({ isActive }) => (
								<CaretRightOutlined rotate={isActive ? 90 : 0} />
							)}
							className={styles['collapse-wrapper']}
						>
							{myCustomer.map((el) => (
								<Panel
									key={el.id}
									className={styles['collapse-panel']}
									header={
										<div className={styles['panel-header-wrapper']}>
											<p className={styles['panel-header']}>{el.title}</p>
										</div>
									}
								>
									{el.data.map((el) => (
										<div key={el.id} className={styles['card']}>
											<p className={styles['card-name']}>{el.name}</p>
										</div>
									))}
								</Panel>
							))}
						</Collapse>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Journey;
