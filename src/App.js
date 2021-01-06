import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { AuthLayout, EmployeeDashboardLayout,   SubPagesLayout } from './views/views';

import './index.css';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
       
        
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/login"/>
                )}/>
                <AuthLayout>
                 <Route  path='/login' component={Login} />
                 <Route  path='/signup' component={Signup} />
                 <Route  path='/employeelogin' component={Employeelogin} />
                 </AuthLayout>
                 <SubPagesLayout>
                 <Route  path='/leaverequest' component={Leaverequest} />
                 <Route  path='/leavehistory' component={Leavehistory} />
                 <Route  path='/presence' component={Presence} />
                 <Route  path='/menu' component={Menu} />
                 </SubPagesLayout>
                 <EmployeeDashboardLayout>
                 <Route path='/employeestab' component={Employeestab} />
                 <Route path='/hometab' component={Hometab} />
                 <Route path='/jobtab' component={Jobtab} />
                 <Route path='/profiletab' component={Profiletab} />
                 <Route path='/reviewstab' component={Reviewstab} />
                 </EmployeeDashboardLayout>
                 
          </Switch>
      
    </Router>
      </div>
    )
  }
}
