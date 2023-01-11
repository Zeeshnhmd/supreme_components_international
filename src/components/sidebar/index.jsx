import {useState} from 'react'
import {
	BranchesOutlined,
	HddOutlined,
	HomeOutlined,
	LineChartOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	MoneyCollectOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './sidebar.module.scss';

const SideBar = ({ collapsed, toggleCollapsed, setCollapsed }) => {
	const [openKeys, setOpenKeys] = useState([]);

	const navigate = useNavigate();

	function getItem(label, key, icon, children, type) {
		return {
			key,
			icon,
			children,
			label,
			type,
		};
	}

	const items = [
		getItem('Home', '/', <HomeOutlined />, [
			getItem('My Journey', '/my-journey'),
		]),
		getItem(
			'My Sales Performance',
			'/sales-performance',
			<LineChartOutlined />,
			[
				getItem('Insights', '/sales-performance/insights'),
				getItem('Trends', '/sales-performance/trends'),
				getItem('Customer-level', '/sales-performance/customer-level'),
				getItem('MNP-level', '/sales-performance/mnp-level'),
			]
		),
		getItem('My Email Engagement', '/email-engagement', <MailOutlined />, [
			getItem('Customer-level', '/email-engagement/customer-level'),
			getItem('Contact-level', '/email-engagement/contact-level'),
			getItem('Conversation Statics', '/email-engagement/conversation-statics'),
		]),
		getItem(
			'My RFQ Opportunities',
			'/rfq-opportunities',
			<BranchesOutlined />,
			[
				getItem('RFQs Stats by Account', '/rfq-opportunities/rfq-stats'),
				getItem('RFQs by Account', '/rfq-opportunities/rfq-accounts'),
			]
		),
		getItem('My Sources', '/my-sources', <MoneyCollectOutlined />, [
			getItem('MPN Queue', '/my-sources/mpn-queue'),
			getItem('MPN Cost Book', '/my-sources/mnp-cost-book'),
		]),
		getItem('My Quotes', '/my-quotes', <HddOutlined />, [
			getItem('Quote Summary', '/my-quotes/quote-summary'),
			getItem('MPN Quote Book', '/my-quotes/mnp-quote-book'),
		]),
	];


	const rootSubmenuKeys = ['/','/sales-performance', '/email-engagement', '/rfq-opportunities', '/my-sources', '/my-quotes' ];

	const onClick = ({ key }) => {
		setTimeout(() => {
			navigate(key);
		}, 0);
	};

  const onOpenChange = (keys) => {
		// navigate(keys.find((key) => openKeys.indexOf(key) === -1));
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
		setCollapsed(false)
  };

	return (
		<div className={styles['sidebar-wrapper']}>
			<div onClick={toggleCollapsed} className={styles['collapse-btn']}>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</div>
			<Menu
				className={` ${styles['side']} ${
					collapsed === true ? styles['sidebar-collapsed'] : styles['sidebar']
				}`}
				mode="inline"
				openKeys={openKeys}
				inlineCollapsed={collapsed}
				items={items}
				triggerSubMenuAction="click"
				onClick={onClick}
				onOpenChange={onOpenChange}	
			/>
		</div>
	);
};

export default SideBar;
