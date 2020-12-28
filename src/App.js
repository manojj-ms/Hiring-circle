import React, { Component } from 'react'
import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './account/login';
import Signup from './account/signup';
import Employeelogin from './account/employeelogin';


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
          </Switch>
      
    </Router>
      </div>
    )
  }
}
