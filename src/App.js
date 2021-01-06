import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {  Login, Signup, Employeelogin, Hometab,   Jobtab, Profiletab, Reviewstab,  Leaverequest, Leavehistory } from "./views/views"
import Presence from './views/subpages/presence';
import Menu from './views/subpages/menu';
import Employeestab from './views/employeedashboard/tabs/employeestab'

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
            
          </Switch>
        </Router>
      </div>
    )
  }
}
