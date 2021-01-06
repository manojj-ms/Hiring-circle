import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {  Login, Signup, Employeelogin, Hometab,   Jobtab, Profiletab, Reviewstab,  Leaverequest, Leavehistory } from "./views/views"
import Presence from './views/subpages/presence';
import Menu from './views/subpages/menu';
import Employeestab from './views/employeedashboard/tabs/employeestab'


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

            <Route path='/leaverequest' component={Leaverequest} />
            <Route path='/leavehistory' component={Leavehistory} />
            <Route path='/presence' component={Presence} />
            <Route path='/menu' component={Menu} />

            <Route path='/employeestab' component={Employeestab} />
            <Route path='/hometab' component={Hometab} />
            <Route path='/jobtab' component={Jobtab} />
            <Route path='/profiletab' component={Profiletab} />
            <Route path='/reviewstab' component={Reviewstab} />

            <TabLayout path="/employer/:path?">
              <Route path="/employer/home" component={EHome} />
              <Route path="/employer/jobs" component={EJobs} />
              <Route path="/employer/employees" component={Employees} />
              <Route path="/employer/profile" component={EProfile} />
              <Route path="/employer/reviews" component={EReviews} />
            </TabLayout>
            
          </Switch>
        </Router>
      </div>
    )
  }
}
