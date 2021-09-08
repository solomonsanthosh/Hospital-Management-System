import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import { Input, Button } from 'antd';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import '../css/staff.css';
import '../css/index.css';
import { useDispatch,useSelector } from 'react-redux';
import Listitem from '../components/Listitem';
const Staff = () => {
   const dispatch = useDispatch()
	const [current, setCurrent] = useState('');
	console.log(current);
   const patient = useSelector(state => state.patient)
   const handleEdit = () => {
      const editedname = window.prompt('entrer a new name')
      dispatch({

      })
   }

	const handleSubmit =async (e) => {
		e.preventDefault();
      dispatch({
         type: 'PATIENT_ADDED',
         payload: {
				id: patient.length + 1,
				name:current
			}        
      })
	};
	return (
		<>
			<NavBar></NavBar>
			<h1 className='titleAdd'>staff</h1>
			<Input
				size='large'
				placeholder='large size'
				prefix={<UserAddOutlined />}
				className='addPatient'
				suffix={
					<PlusOutlined
						style={{ backgroundColor: '' }}
						onClick={handleSubmit}
					/>
				}
				value={current}
				onChange={(e) => setCurrent(e.target.value)}
			/>
			{ patient.length &&  patient.map((p) => { return (
            <>
         
			<Listitem person={p}></Listitem> 
         </>
         )})}
			<Button />
		</>
	);
};
export default Staff;
