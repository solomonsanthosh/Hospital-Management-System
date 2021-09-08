import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import { Input, Button } from 'antd';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import '../css/staff.css';
import '../css/admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Listitem from '../components/Listitem';
import AdminNav from '../components/adminNav';
import DoctorAdd from '../components/admincomp/DoctorAdd';
const Admin = () => {
	const { doctor } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	const [newDoctor, setNewDoctor] = useState('');
	const [doctors, setDoctors] = useState([])
   
	useEffect(async () => {
		await setDoctors(doctor);
      console.log(doctors);
	}, [doctor]);
	


	return (
		<>
			<NavBar></NavBar>
         <AdminNav/>
         <DoctorAdd></DoctorAdd>
			
		</>
	);
};
export default Admin;
