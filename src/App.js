import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './account/login';
import Signup from './account/signup';
import Employeelogin from './account/employeelogin';
import Leaverequest from './leaverequest';
import Leavehistory from './leavehistory';
import Presence from './presence';
import Menu from './menu';
import bottomtabs from './bottomtabs';
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
                 <Route exact path='/login' component={Login} />
                 <Route exact path='/signup' component={Signup} />
                 <Route exact path='/employeelogin' component={Employeelogin} />
                 <Route exact path='/leaverequest' component={Leaverequest} />
                 <Route exact path='/leavehistory' component={Leavehistory} />
                 <Route exact path='/presence' component={Presence} />
                 <Route exact path='/menu' component={Menu} />
                 <Route exact path='/bottomtabs' component={bottomtabs} />
          </Switch>
      
    </Router>
      </div>
    )
  }
}
