import React, {useState} from 'react';
import '../css/admin.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
	MailOutlined,
	UsergroupAddOutlined,
	UnorderedListOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const StaffNav = (prop) => {
   const [current, setCurrent] = useState(prop.select)
	const handleClick = (e) => {
      console.log(e.key);
      console.log(prop);
   }
	return (
		<>
         <Menu
         style={{
            position: 'relative',
            height: '100px',
            display: 'flex',
            alignItems: 'flex-end',
            marginTop: '5px',
            width: '99%',
            borderRadius: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            
         }}
			selectedKeys={current}
			mode='horizontal'
			className='d-flex '
		>
			
         <Menu.Item className= 'icon-1'  key='1' icon={<UsergroupAddOutlined />}>
					<Link to='/staff'><span>Add Patients</span></Link>
				</Menu.Item>
			<Menu.Item className= 'icon-2' key='2' icon={<UnorderedListOutlined />}>
				<Link to='/staff/patient'>View Patients</Link>
			</Menu.Item>




			
		</Menu>
		</>
	);
};
export default StaffNav;
