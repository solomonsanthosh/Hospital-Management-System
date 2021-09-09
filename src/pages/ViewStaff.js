import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AdminNav from '../components/adminNav';
import NavBar from '../components/navBar';
import Listitem from '../components/Listitem';
import '../css/staff.css';
import '../css/admin.css';
import '../css/index.css';
import '../css/listitem.css';

const ViewStaff = () => {
	const { staff } = useSelector((state) => ({ ...state }));


	return (
		<div>
			<AdminNav select={'3'}></AdminNav>
			<div className='doctorAdd'>
				<div className='card-container' >
					{staff.map((staff) => (
						<>
							<Listitem key={staff.name} person={staff}></Listitem>
						</>
					))}
				</div>
			</div>
		</div>
	);
};
export default ViewStaff;

