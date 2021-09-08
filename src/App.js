import React , {useEffect} from "react";
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Login from "./pages/login";
import { useDispatch } from "react-redux";
import Staff from "./pages/staff";
import Doctor from "./pages/doctor";
import Admin from "./pages/admin";
import DoctorEdit from "./pages/doctoredit";
import ShowDoc from "./components/admincomp/showDoc";
import AddStaff from "./pages/AddStaff";
import ViewStaff from "./pages/ViewStaff";

const App = () => {
  

  return (

    <Switch>
    <Route exact path='/login'component={Login}></Route>
    <Route exact path='/staff'component={Staff}></Route>
    <Route exact path='/doctor'component={Doctor}></Route>
    <Route exact path='/admin'component={Admin}></Route>
    <Route exact path='/doctor/edit/:id' component={DoctorEdit}></Route>
    <Route exact path='/admin/doctor' component={ShowDoc}></Route>
    <Route exact path='/admin/staff/add' component={AddStaff}></Route>
    <Route exact path='/admin/staff/view' component={ViewStaff}></Route>
    </Switch>
    


        
  )
}

export default App;
