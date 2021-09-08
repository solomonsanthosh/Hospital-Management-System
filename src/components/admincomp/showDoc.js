import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AdminNav from '../adminNav';
import NavBar from '../navBar';
import Listitem from '../Listitem';
import '../../css/staff.css';
import '../../css/admin.css';
import '../../css/index.css';

const ShowDoc = () => {
   const [doctors, setDoctors] = useState([]);
	const { doctor } = useSelector((state) => ({ ...state }));


	return (
		<div>
			<NavBar></NavBar>
			<AdminNav select={'2'} open={'sub1'}></AdminNav>
			<div className='doctorAdd'>
				<div className='doc-form' >
					{doctor.map((doc) => (
						<>
							<Listitem key={doc.name} person={doc}></Listitem>
						</>
					))}
				</div>
			</div>
		</div>
	);
};
export default ShowDoc;
