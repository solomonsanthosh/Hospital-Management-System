import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import '../css/index.css';
import { Input, Button } from 'antd';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import '../css/staff.css';
import { useDispatch,useSelector } from 'react-redux';
import Listitem from '../components/Listitem';
const Doctor = () => {
   const {patient} = useSelector(state => ({...state}))


	return (
		<>
			<h1 className='titleAdd'>View Patients</h1>
			{ patient.length ? (patient.map(p => <Listitem person={p}/>))  : (<h1 className='titleAdd'>No patient</h1>) }
			ff
		</>
	)
}	

export default Doctor;