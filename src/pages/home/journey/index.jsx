import { CaretRightOutlined, HomeOutlined } from '@ant-design/icons';
import { Avatar, Collapse, Divider } from 'antd';

import styles from './journey.module.scss';

const { Panel } = Collapse;

const Journey = ({ userType }) => {
	console.log(userType, 'hi teh');

	const mySalesPerformance = [
		{ id: '1', title: 'Get insights into my performance' },
		{ id: '2', title: 'View my YOY trends' },
		{ id: '3', title: 'View Account-level record of transactions' },
		{ id: '4', title: 'View MPN-level record of transactions' },
	];

	const myTeamsSalesPerformance = [
		{ id: '1', title: 'Get my team’s insights into our performance' },
		{ id: '2', title: 'View my team’s YOY trends' },
		{ id: '3', title: 'View my team’s Account-level record of transactions' },
		{ id: '4', title: 'View my team’s  MPN-level record of transactions' },
	];

	const mySalesPerformanceCE = [
		{ id: '1', title: 'Get insights into SCI’s performance' },
		{ id: '2', title: 'View SCI’s team’s YOY trends' },
		{
			id: '3',
			title: 'View SCI’s team’s Account-level record of transactions',
		},
		{ id: '4', title: 'View SCI’s team’s  MPN-level record of transactions' },
	];

	const myCustomerSR = [
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
		{
			id: 4,
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
	];

	const myCustomerSM = [
		{
			id: 1,
			title: 'My Email Engagement',
			data: [
				{
					id: '1',
					name: 'View my team’s  customer email activity',
				},
				{
					id: '2',
					name: 'View my team’s contact email activity',
				},
				{
					id: '3',
					name: 'View my team’s conversation statistics',
				},
			],
		},
		{
			id: 2,
			title: 'My RFQ opportunities',
			data: [
				{
					id: '1',
					name: 'View my team’s RFQ stats by account',
				},
				{
					id: '2',
					name: 'View my team’s RFQs by account',
				},
			],
		},
		{
			id: 3,
			title: 'My Sources',
			data: [
				{
					id: '1',
					name: 'View my team’s MPN cost book',
				},
				{
					id: '2',
					name: 'View the Sourcing Queue',
				},
			],
		},
		{
			id: 4,
			title: 'My Quotes',
			data: [
				{
					id: '1',
					name: 'View my team’s Quote Summaries',
				},
				{
					id: '2',
					name: 'View my team’s Quote Book',
				},
			],
		},
	];

	const myCustomerCE = [
		{
			id: 1,
			title: 'My Email Engagement',
			data: [
				{
					id: '1',
					name: 'View SCI’s team’s  customer email activity',
				},
				{
					id: '2',
					name: 'View SCI’s team’s contact email activity',
				},
				{
					id: '3',
					name: 'View SCI’s team’s conversation statistics',
				},
			],
		},
		{
			id: 2,
			title: 'My RFQ opportunities',
			data: [
				{
					id: '1',
					name: 'View SCI’s RFQ stats by account',
				},
				{
					id: '2',
					name: 'View SCI’s RFQs by account',
				},
			],
		},
		{
			id: 3,
			title: 'My Sources',
			data: [
				{
					id: '1',
					name: 'View SCI’s MPN cost book',
				},
				{
					id: '2',
					name: 'View the Sourcing Queue',
				},
			],
		},
		{
			id: 4,
			title: 'My Quotes',
			data: [
				{
					id: '1',
					name: 'View SCI’s Quote Summaries',
				},
				{
					id: '2',
					name: 'View SCI’s Quote Book',
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
			<div className={styles['trees-wrapper']}>
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
										{(userType === 'SR' ||
											userType === 'CE' ||
											userType === 'CE' ||
											userType === 'S' ||
											userType === 'Admin') &&
											'My Sales Performance'}
										{userType === 'SM' && 'My Team’s Sales Performance'}
									</p>
								</div>
							}
							key="1"
						>
							{userType === 'SR' && (
								<>
									{mySalesPerformance.map((el) => (
										<div key={el.id} className={styles['card']}>
											<p className={styles['card-name']}>{el.title}</p>
										</div>
									))}
								</>
							)}
							{userType === 'SM' && (
								<>
									{myTeamsSalesPerformance.map((el) => (
										<div key={el.id} className={styles['card']}>
											<p className={styles['card-name']}>{el.title}</p>
										</div>
									))}
								</>
							)}
							{(userType === 'CE' ||
								userType === 'S' ||
								userType === 'Admin') && (
								<>
									{mySalesPerformanceCE.map((el) => (
										<div key={el.id} className={styles['card']}>
											<p className={styles['card-name']}>{el.title}</p>
										</div>
									))}
								</>
							)}
						</Panel>
					</Collapse>
				</div>

				<div className={styles['tree-wrapper']}>
					<div className={styles['user-info']}>
						<Avatar
							size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64 }}
							src="https://i.pravatar.cc/150?img=12"
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
						{userType === 'SR' && (
							<>
								{myCustomerSR.map((el) => (
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
							</>
						)}
						{userType === 'SM' && (
							<>
								{myCustomerSM.map((el) => (
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
							</>
						)}
						{(userType === 'CE' ||
							userType === 'S' ||
							userType === 'Admin') && (
							<>
								{myCustomerCE.map((el) => (
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
							</>
						)}
					</Collapse>
				</div>
			</div>
		</div>
	);
};

export default Journey;
