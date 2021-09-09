import React from 'react';
import '../css/listitem.css';
import { Input, Button } from 'antd';
import { Card } from 'antd';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import {
	DeleteOutlined,
	EditOutlined,
	UserDeleteOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Listitem = (props) => {
	const dispatch = useDispatch();

	const handleClick = (id,role) => {
		console.log(id);
		dispatch({
			type: `REMOVE_${role}`,
			payload: id,
		});
	};

	return (
		<div className='card-container'>
			{/* <div className='card-item'>
				<span className='title-doc'>{props.person.name}</span>
				<div className='btn-wrap'>
					<Link className='edit-icon' to={`/doctor/edit/${props.person.id}`}>
						<span>
							<EditOutlined />
						</span>
					</Link>
					<span className='delete-icon'>
						<UserDeleteOutlined onClick={() => handleClick(props.person.id)} />
					</span>
				</div>
			</div> */}
			<Card
				title={<span>{props.person.name}</span>}
				// extra={
				// 	<Link className='edit-icon'  to={`/doctor/edit/${props.person.id}`}>
				// 		<EditOutlined style={{position:'absolute',left:'2px'}}/>
				// 	</Link>,
				// 	<Link style={{float:'left'}} to={`/doctor/edit/${props.person.id}`}>
				// 		<UserDeleteOutlined onClick={() => handleClick(props.person.id)} />
				// 	</Link>
				// }
				
			
				style={{ width: 300 }}
				className='card'
			>
					
				<p>{props.person.specialisation}</p>
				<p>{props.person.designation}</p>
				<p>{props.person.email}</p>
				<p>{props.person.phone}</p>
				<div className='card-ftr'>
				<Link className='edit-icon'  to={`${props.person.role}/edit/${props.person.id}`}>
				<EditOutlined />
				</Link>
				
				<UserDeleteOutlined style={{
					paddingLeft: '10px'
				}} onClick={() => handleClick(props.person.id,props.person.role)} />
				</div>
			</Card>
		</div>
	);
};
export default Listitem;
