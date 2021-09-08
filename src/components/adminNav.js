import React, {useState} from 'react';
import '../css/admin.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
	MailOutlined,
	AppstoreOutlined,
	SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const AdminNav = (prop) => {
   const [current, setCurrent] = useState(prop.select)
	const handleClick = async (e) => {
      await setCurrent(`${e.key}`);
      await console.log(e.key);
      await console.log(current);
   }
	return (
		<>
			<div className='sideNav'>
				<Menu
               style={{ width: 256 }}
					mode='inline'
               onClick={handleClick} 
               defaultOpenKeys={['sub1']}
               selectedKeys={current}    
				>
					<SubMenu key='sub1' icon={<SettingOutlined />} title='Doctors'>
						<Menu.Item key='1'><Link style={{
                     color:'white'
                  }}to='/admin'>Add Doctors</Link></Menu.Item>
						<Menu.Item key='2'><Link style={{
                     color:'white'
                  }} to='/admin/doctor'>View Doctors</Link></Menu.Item>
					</SubMenu>
					<SubMenu key='sub2' icon={<SettingOutlined />} title='Staff'>
						<Menu.Item key='3'><Link style={{
                     color:'white'
                  }} to='/admin/staff/add'>Add Staff</Link></Menu.Item>
						<Menu.Item key='4'><Link style={{
                     color:'white'
                  }} to='/admin/staff/view'>View Staff</Link></Menu.Item>
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
export default AdminNav;
