import React from 'react'
import { Input, Button } from 'antd';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import '../../css/staff.css';
import '../../css/admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Listitem from '../Listitem';


const DoctorAdd = () => {
   const dispatch = useDispatch()
   const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({
			type: 'ADD_DOCTOR',
			payload: {
				id: doctor.length + 1,
				name: newDoctor,
			},
		});
	};
   return (
      <>
      <h1 className='titleAdd'>ADD DOCTOR</h1>
			<Input
				size='large'
				placeholder='Add Doctor'
				prefix={<UserAddOutlined />}
				className='addPatient'
				suffix={
					<PlusOutlined
						style={{ backgroundColor: '' }}
						onClick={handleSubmit}
					/>
				}
				value={newDoctor}
				onChange={(e) => setNewDoctor(e.target.value)}
			/>
			{doctors.map((doc) => (
				<>
					<Listitem person={doc}></Listitem>
				</>
			))}
         
      </>
   )
}

export default DoctorAdd