import { useEffect, useState } from 'react';
import Header from '../header';
import SideBar from '../sidebar';

import styles from './layout.module.scss';

const Layout = ({ children, userTypes, userType, setUserType }) => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleCollapsed = () => {
		setCollapsed(false);
	};

	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 600px)');

		if (mediaQuery) {
			setCollapsed(true);
		}
	}, []);

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
					<SideBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} setCollapsed={setCollapsed} />
				</div>
				<div
					className={`${styles['cont']} ${
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
