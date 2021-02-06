import React from 'react';
import { Link } from 'react-router-dom';
const Employee = () => {
    return (
        <div className="bg-white">
            
            <div className=" bg-gray-200 dark:bg-gray-200 w-screen p-3">
<div className="px-5 py-4 bg-white dark:bg-gray-900 relative shadow rounded-2xl max-h-screen h-40 rounded-b-3xl  max-w-lg">
    <div className="flex justify-between mb-4">
      <div className="flex items-center">
      <div className="w-9 h-9 flex items-center justify-center bg-purple-600 rounded-full" >
      <svg className="text-white w-4 h-4 mx:auto " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>

      </div>
      <div className=" ml-2">
      <div className="text-gray-500 text-xs ml-1 ">Hi Feni,</div>
      <div className="text-gray-500 font-semibold text-sm ml-1  flex items-center justify-center ">Welcome Back
      <div className=""><svg className="text-yellow-300 w-5 h-5  mx:auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
</svg></div>
      </div>
      </div>
     
      
     
      
      </div>
      <div className="">
      <div className="w-9 h-9  flex items-center justify-center bg-purple-600 rounded-full" >
      <svg className="text-white w-4 h-4 mx:auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>

      </div>
     
      </div>
     
    </div>
   
    <div className="flex justify-between items-center mt-5">
    <div className="flex ">
     
      <span className="ml-1 text-gray-500 dark:text-gray-400 text-xs  font-light">How are you today ? </span>
    </div>  
    
    </div>
    <div className="ml-1 flex justify-start items-center text-xs font-semibold text-gray-500 dark:text-gray-400 ">CheckIn/CheckOut</div>
    <div className="">
    <div className="">
  
  <div className="flex items-center  relative  justify-center">
  
  <div className="w-full  absolute  top-6 left-0 right-7 -bottom-14">
      <div className="bg-blue-900 relative shadow-xl border-4 border-blue-900 rounded-2xl p-2  py-5">
         
          <div className="w-full mb-3 -mt-3  px-2  h-20 bg-white   rounded-2xl  flex-wrap items-center justify-around">
            <div className="flex items-center justify-start ml-3">
              <span className="text-3xl font-semibold mr-2 " >5</span>  <span className="text-xl mr-4 " >Monday</span><span className="text-xl mr-3 " >  2020</span>

             
            </div>
            <div className="flex items-center justify-around text-sm ml-2">
              <div className="">Clock In</div>
              <div className="">Clock Out</div>

             
            </div>
            <div className="flex items-center justify-around text-sm mb-2">
              <div className=" text-red-400 font-semibold">09.00 AM</div>
              <div className="">--;--</div>

             
            </div>
           
          </div>
          
          
      </div>
  </div>
  
  </div>
  
    </div>
    </div>
    
  </div>
  
 
<div className="flex items-center justify-between min-h-screen bg-gray-200 text-gray-800">
  <div className="p-4 w-full mt-6 mb-1">
    <div className="grid grid-cols-12 gap-4">
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded-xl p-3">
          <div className="flex items-center justify-center flex-shrink-0 h-10 w-10 rounded-xl bg-red-100 text-red-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" ></path></svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm mt-3 font-semibold text-gray-500"><Link to ='/employee/checkin'>CheckIn</Link><Link to ='/employee/checkout'>/CheckOut</Link></div>
            
          </div>
        </div>
      </div>
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded-xl p-3">
          <div className="flex items-center justify-center flex-shrink-0 h-10 w-10 rounded-xl bg-yellow-400 ">
          <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm mt-3 font-semibold text-gray-500">My Attendance</div>
            
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded-xl p-3">
          <div className="flex items-center justify-center flex-shrink-0 h-10 w-10 rounded-xl bg-red-300 ">
          <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
</svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm mt-3 font-semibold text-gray-500">My Payroll</div>
            
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded-xl p-3">
          <div className="flex items-center justify-center flex-shrink-0 h-10 w-10 rounded-xl bg-green-300 ">
          <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm mt-3 font-semibold text-gray-500"><Link to='/employee/leavehistory'>Leave Result</Link>/<Link to='/employee/allhistory'>Leave History</Link></div>
            
          </div>
        </div>
      </div>
     
    </div>
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded-xl p-3 mt-4">
          <div className="flex items-center justify-center flex-shrink-0 h-10 w-10 rounded-xl bg-green-300 ">
          <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm mt-3 font-semibold text-gray-500"><Link to='/employee/searchjobs'>Jobs</Link></div>
            
          </div>
        </div>
      </div>
     
  </div>
</div>
</div>
        </div>
    )
}

export default Employee;