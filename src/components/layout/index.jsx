import Header from '../header';
import SideBar from '../sidebar';

import styles from './layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div className={styles['layout-wrapper']}>
			<div className={styles['header']}>
				<Header />
			</div>
			<div className={styles['sidebar-content-wrapper']}>
				<div className={styles['sidebar']}>
					<SideBar />
				</div>
				<div className={styles['content']}>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
