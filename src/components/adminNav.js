import React from 'react';
import '../css/admin.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
	MailOutlined,
	AppstoreOutlined,
	SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const adminNav = () => {
	return (
		<>
			<div className='sideNav'>
				<Menu
					style={{ }}
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode='inline'
				>
					<SubMenu key='sub1' icon={<MailOutlined />} title='Doctors'>
						
							<Menu.Item key='1'>Add Doctor</Menu.Item>
							<Menu.Item key='2'>View Doctors</Menu.Item>
					
					</SubMenu>
					<SubMenu key='sub2' icon={<AppstoreOutlined />} title='Staff'>
						<Menu.Item key='5'>Add staff</Menu.Item>
						<Menu.Item key='6'>View staff</Menu.Item>
					</SubMenu>
				</Menu>
				{/* <Link className='add-doc-sidenav'>Add Doctor</Link>
            <Link>View Doctors</Link>
            <Link>Add Staff</Link>
            <Link>View Staff</Link> */}
			</div>
		</>
	);
};
export default adminNav;
