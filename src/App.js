import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {  Login, Signup, Employeelogin } from "./views/views";  
import {  Leaverequest, Leavehistory, Menu, Presence, } from "./views/views";  




import EHome from './views/employer/tabs/ehome';
import EJobs from './views/employer/tabs/ejobs';
import Employees from './views/employer/tabs/employees';
import EProfile from './views/employer/tabs/eprofile';
import EReviews from './views/employer/tabs/ereviews';
import TabLayout from './layouts/tabs';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/employeelogin' component={Employeelogin} />

            

            <TabLayout path="/employer/:path?">
              <Route path="/employer/home" component={EHome} />
              <Route path="/employer/jobs" component={EJobs} />
              <Route path="/employer/employees" component={Employees} />
              <Route path="/employer/profile" component={EProfile} />
              <Route path="/employer/reviews" component={EReviews} />
            </TabLayout>

            
           <Route path="/employee/leaverequest" component={Leaverequest} />
           <Route path="/employee/leavehistory" component={Leavehistory} />
           <Route path="/employee/presence" component={Presence} />
           <Route path="/employee/menu" component={Menu} />

           

            
          </Switch>
        </Router>
      </div>
    )
  }
}
