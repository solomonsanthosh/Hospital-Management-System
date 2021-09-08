import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AdminNav from '../components/adminNav';
import NavBar from '../components/navBar';
import Listitem from '../components/Listitem';
import '../css/staff.css';
import '../css/admin.css';
import '../css/index.css';

const ViewStaff = () => {
	const { staff } = useSelector((state) => ({ ...state }));


	return (
		<div>
			<NavBar></NavBar>
			<AdminNav select={'4'} open={'sub2'}></AdminNav>
			<div className='doctorAdd'>
				<div className='doc-form' >
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

