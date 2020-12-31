<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom';
=======
 import React from 'react'
 import { Link } from 'react-router-dom';
 
const login = () => {
    return (
      <div className="app">
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">

<div className="flex flex-col overflow-y-auto md:flex-row">
  
 
>>>>>>> 180095e22874965b30c1e3ca4e619a9c025c3a9e

const login = () => {
   return (
     <div className="app">
       <div className="flex items-center bg-gray-50 dark:bg-gray-900">
         <div className="flex flex-col w-full min-h-screen justify-center">
           <div className="pb-6">
             <h1 className="mb-4 htext text-center text-xl font-semibold text-gray-700 dark:text-gray-200">
               Hiring <span class="text-purple-500" >Circle</span>
             </h1>
             <p className="text-center fon text-gray-700 dark font-semibold font-weight-700  ">Sign in to continue</p>
           </div>
           <div className="w-full px-5">
             <div className="flex items-center bg-white rounded  mb-4">
                 <span className="px-3">
                   <svg className="fill-current text-gray-400 w-4 h-4" xmlns="" viewBox="0 0 20 20">
                       <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/>
                   </svg>
                 </span>
                 <input className="block w-full mt-1 p-3 text-xs font-semibold font-weight-100 rounded text-gray-700 dark:text-gray-200 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="email" name="email" placeholder="Email Address" />
             </div>
             <div className="flex items-center bg-white rounded  mb-4">
                 <span className="px-3">
                   <svg className="fill-current text-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                   </svg>
                 </span>
                 <input className="block w-full mt-1 p-3 text-xs font-semibold font-weight-100 rounded text-gray-700 dark:text-gray-200 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="password" name="password" placeholder="Password" />
             </div>
             <div className="mb-4">
                 <p className="mt-4
                   fon text-right font-semibold font-weight-100 mt-4 text-grey-700 dark   hover:underline"
                   >
                   Forgot your password?
                 </p>
             </div>
             <button className="block w-full px-4 py-2 mt-6 border-radius: 100px; font-semibold font-weight-400 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">Sign in</button>
             <p className="p-6 fon font-semibold font-weight-700  no-underline  hover:underline text-center"
                 >
                 Don't have an account?
                 <span class="text-purple-500 ml-2" >
                   <Link to='/signup' target='_blank'>
                   Signup</Link>
                 </span>
             </p>
           </div>
         </div>
       </div>
     </div>
   )
}

export default login
