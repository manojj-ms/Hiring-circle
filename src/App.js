import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Login  from "./views/account/employerlogin";
import  Signup  from "./views/account/signup";  
import  Employeelogin  from "./views/account/employeelogin";
  
import  Leavehistory  from "./views/employee/leave-application/leavehistory";
import  EmployeeLeavehistory  from "./views/employer/leave-application/eeleavehistory";
import  EmployerProfile  from "./views/employer/profile/profile";
import  EmployeeProfile  from "./views/employee/profile/profile";
import  EmployeeReview  from "./views/employee/review/view";
import  EmployerReview  from "./views/employer/review/aboutemployee";
import  PostJob  from "./views/employer/jobs/postjob";
import  ApplyJob  from "./views/employee/jobs/applyjob";
import  SearchJob  from "./views/employee/jobs/searchjob";
import  Payroll  from "./views/employee/payroll/view";
import  AllHistory  from "./views/employee/leave-application/allhistory";
import  ApplyLeave  from "./views/employee/leave-application/applyleave";
import  CheckIn  from "./views/employee/checkin-out/checkin";
import  CheckOut  from "./views/employee/checkin-out/checkout";
import  Attendance  from "./views/employer/attendance/Employeeattendance";
import  GeneratePayroll  from "./views/employer/payroll/generate";
import  Employee  from "./views/employee/home/employee";
import  Employer  from "./views/employer/home/employer";






export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          {/*Authentication*/}
            <Route path='/employerlogin' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/employeelogin' component={Employeelogin} />

            
          
          {/*Employer*/}
          <Route path="/employer/profile" component={EmployerProfile} />
          <Route path="/employer/leavehistory" component={EmployeeLeavehistory} />
          <Route path="/employer/review" component={EmployerReview} />  
          <Route path="/employer/jobs" component={PostJob} />
          <Route path="/employer/payroll" component={GeneratePayroll} />
          <Route path="/employer/attendance" component={Attendance}/>
          <Route path="/employer" component={Employer}/> 
          
          
           {/*Employee*/}
           <Route path="/employee/profile" component={EmployeeProfile} />
           <Route path="/employee/leavehistory" component={Leavehistory} />
           <Route path="/employee/allhistory" component={AllHistory} />
           <Route path="/employee/applyleave" component={ApplyLeave} />
           <Route path="/employee/review" component={EmployeeReview} />  
           <Route path="/employee/applyjobs" component={ApplyJob} />
           <Route path="/employee/searchjobs" component={SearchJob} />             
           <Route path="/employee/payroll" component={Payroll} />
           <Route path="/employee/checkin" component={CheckIn}/>
           <Route path="/employee/checkout" component={CheckOut}/>
           <Route path="/employee" component={Employee}/>
           

        </Switch>
        </Router>
      </div>
    )
  }
}
