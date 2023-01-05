import { useState } from 'react';
import Header from '../header';
import SideBar from '../sidebar';

import styles from './layout.module.scss';

const Layout = ({ children, userTypes, userType, setUserType }) => {
	const [collapsed, setCollapsed] = useState(false);
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className={styles['layout-wrapper']}>
			<div className={styles['header']}>
				<Header
					userTypes={userTypes}
					userType={userType}
					setUserType={setUserType}
				/>
			</div>
			<div className={styles['sidebar-content-wrapper']}>
				<div
					className={`${
						collapsed === true ? styles['collapsed-sidebar'] : styles['sidebar']
					}`}
				>
					<SideBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
				</div>
				<div
					className={`${
						collapsed ? styles['collapsed-content'] : styles['content']
					}`}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
