import {
	EyeOutlined,
	QuestionCircleOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Tag } from 'antd';
import React, { useState } from 'react';
import styles from './header.module.scss';

const Header = ({ userTypes }) => {
	console.log(userTypes);

	const [userType, setUserType] = useState('SR');

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
		<div
			className={`${styles['header-wrapper']}
			 ${userType === 'SR' && styles['header-sr']}
			 ${userType === 'SM' && styles['header-sm']}
			 ${userType === 'CE' && styles['header-ce']}
			 ${userType === 'S' && styles['header-s']}
			 ${userType === 'Admin' && styles['header-admin']}
			 ${!userType && styles['no-user-type']}
			 `}
		>
			<div className={styles['user-name']}>
				<p className={styles['name']}>Hello, Aslam</p>
			</div>
			<div className={styles['brand-wrapper']}>
				<p className={styles['brand-name']}>Welcome to Eden</p>
			</div>
			<div className={styles['users-wrapper']}>
				<div className={styles['view-type']}>
					<EyeOutlined /> <p className={styles['user-type']}>{userType}</p>
				</div>
				<div>
					{userTypes.map((el) => (
						<Tag
							className={styles['tags']}
							key={el?.id}
							onClick={() => setUserType(el?.type)}
						>
							<p className={styles['tag-name']}> {el?.type}</p>
						</Tag>
					))}
				</div>
				<SettingOutlined className={styles['nav-options']} />
				<QuestionCircleOutlined className={styles['nav-options']} />
				<Dropdown
					menu={{
						items,
					}}
				>
					<Avatar
						className={styles['nav-options']}
						style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
					>
						U
					</Avatar>
				</Dropdown>
			</div>
		</div>
	);
};

export default Header;
