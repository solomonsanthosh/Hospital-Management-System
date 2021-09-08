import React , {useEffect} from "react";
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Login from "./pages/login";
import { useDispatch } from "react-redux";
import Staff from "./pages/staff";
import Doctor from "./pages/doctor";
import Admin from "./pages/admin";
import DoctorEdit from "./pages/doctoredit";
const App = () => {
  const dispatch = useDispatch()
  	
  return (
   
    <Switch>
    <Route exact path='/login'component={Login}></Route>
    <Route exact path='/staff'component={Staff}></Route>
    <Route exact path='/doctor'component={Doctor}></Route>
    <Route exact path='/admin'component={Admin}></Route>
    <Route exact path='/doctor/edit/:id' component={DoctorEdit}></Route>
    </Switch>
    


        
  )
}

export default App;
