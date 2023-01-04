import { QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import React from 'react';
import styles from './header.module.scss';

const Header = () => {
	const items = [
		{
			label: <a href="/">View Profile</a>,
			key: '0',
		},
		{
			label: <a href="/">Logout</a>,
			key: '1',
		},
	];

	return (
		<div className={styles['header-wrapper']}>
			<div className={styles['user-name']}>
				<p className={styles['name']}>Hello, Aslam</p>
			</div>
			<div className={styles['brand-wrapper']}>
				<p className={styles['brand-name']}>Welcome to Eden</p>
			</div>
			<div className={styles['users-wrapper']}>
				<SettingOutlined />
				<QuestionCircleOutlined />
				<Dropdown
					menu={{
						items,
					}}
				>
					<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
						U
					</Avatar>
				</Dropdown>
			</div>
		</div>
	);
};

export default Header;
