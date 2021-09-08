import React, { useState } from 'react';
import { Menu } from 'antd';
import {
	MailOutlined,
	AppstoreOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const NavBar = () => {
	const history = useHistory();
	const { user } = useSelector((state) => ({ ...state }));
	const [current, setCurrent] = useState('');

	return (
		<Menu
			selectedKeys={[current]}
			mode='horizontal'
			className='d-flex justify-content-end'
		>
			<Menu.Item key='Home' icon={<MailOutlined />}>
				<Link to='/'>Home</Link>
			</Menu.Item>
			{!user && (
				<Menu.Item key='login' icon={<AppstoreOutlined />}>
					<Link to='/login'>Login</Link>
				</Menu.Item>
			)}

			{user && (
				<SubMenu
					key='SubMenu'
					icon={<SettingOutlined />}
					title={user ? user.name : 'user'}
				>
					<Menu.ItemGroup>
						{user && user.name === 'admin' && (
							<Menu.Item key='setting:3'>
								<Link to='/admindashboard'>Dashboard</Link>
							</Menu.Item>
						)}
						{user && user.name === 'staff' && (
							<Menu.Item key='setting:3'>
								<Link to='/staffdashboard'>Dashboard</Link>
							</Menu.Item>
						)}
					</Menu.ItemGroup>
				</SubMenu>
			)}
		</Menu>
	);
};
export default NavBar;
