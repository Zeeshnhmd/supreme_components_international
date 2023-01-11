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

const SideBar = ({ collapsed, toggleCollapsed }) => {
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

	const onClick = ({ key }) => {
		console.log(key);
		navigate(key);
	};

	const onOpenChange = (key) => {
		navigate(key[key.length - 1]);
	};

	return (
		<div className={styles['sidebar-wrapper']}>
			<div onClick={toggleCollapsed} className={styles['collapse-btn']}>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</div>
			<Menu
				onOpenChange={onOpenChange}
				onClick={onClick}
				className={` ${styles['side']} ${
					collapsed === true ? styles['sidebar-collapsed'] : styles['sidebar']
				}`}
				defaultSelectedKeys={['/']}
				mode="inline"
				inlineCollapsed={collapsed}
				items={items}
				triggerSubMenuAction="click"
			/>
		</div>
	);
};

export default SideBar;
