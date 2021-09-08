import React from 'react'
import NavBar from '../components/navBar'
import AdminNav from '../components/adminNav'
import AddStaffComp from '../components/admincomp/AddStaff'

const AddStaff = () => {
   return (
      <>
      <NavBar></NavBar>
      <AdminNav select={'3'} open={'sub2'}></AdminNav>
      <AddStaffComp/>

         
      </>
   )
}

export default AddStaff
