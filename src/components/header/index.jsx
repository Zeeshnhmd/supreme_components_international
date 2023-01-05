import { EyeOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Select, Tag } from 'antd';

import styles from './header.module.scss';

const Header = ({ userTypes, userType, setUserType }) => {
	const items = [
		{
			label: <a href="/">View Profile</a>,
			key: '0',
		},
		{
			label: <a href="/">Logout</a>,
			key: '1',
		},
		{
			label: <a href="/">Setting</a>,
			key: '2',
		},
	];

	const handleChange = (value) => {
		setUserType(value);
	};

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
				<p className={styles['name']}>Hello, Supreme</p>
			</div>
			<div className={styles['brand-wrapper']}>
				<p className={styles['brand-name']}>Welcome to Eden</p>
			</div>
			<div className={styles['users-wrapper']}>
				<div className={styles['view-type']}>
					<EyeOutlined /> <p className={styles['user-type']}>{userType}</p>
				</div>
				<div className={styles['tages-wrapper']}>
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
				<div className={styles['user-dropdown']}>
					<Select
						className={styles['select-wrapper']}
						defaultValue="SR"
						defaultActiveFirstOption
						onChange={handleChange}
						options={userTypes.map((el) => ({
							label: el?.type,
							value: el?.type,
						}))}
					/>
				</div>

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
