import React from 'react'
import NavBar from '../components/navBar'
import AdminNav from '../components/adminNav'
import AddStaffComp from '../components/admincomp/AddStaff'

const AddStaff = () => {
   return (
      <>
      <NavBar></NavBar>
      <AdminNav select={'4'}></AdminNav>
      <AddStaffComp/>

         
      </>
   )
}

export default AddStaff
