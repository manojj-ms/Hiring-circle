import React from 'react'

const employeelogin = () => {
   return (
       
    <div className="app">
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">

<div class="flex flex-col overflow-y-auto md:flex-row">



<div class=" ">
<h1
         class="mb-4 text-center htext font-semibold text-gray-700 dark:text-gray-200"
       >
         Hiring <span class="text-purple-500" >Circle</span>

       </h1>
       <p class="mb-9 mt-1  text-center text-xs text-gray-700 dark font-semibold font-weight-700  ">Sign in to continue</p>
<div class="w-5/5 mx-auto">
  <div class="flex items-center bg-white rounded  mb-4">
    <span class="px-3">
    <svg class="fill-current text-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
    </span>
    <input class="block w-full mt-1 p-3 text-xs font-semibold font-weight-100 rounded text-gray-700 dark:text-gray-200 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="email" name="email" placeholder="Employee ID" />
  </div>
  <div class="flex items-center bg-white rounded  mb-4">
    <span class="px-3">
    <svg class="fill-current text-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
</svg>
    </span>
    <input class="block w-full mt-1 p-3 text-xs font-semibold font-weight-100 rounded text-gray-700 dark:text-gray-200 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="password" name="password" placeholder="Password" />
  </div>
  <div class="mb-4">
 
  </div>
  <button class="block w-full px-4 py-2 mt-9 border-radius: 100px; font-semibold font-weight-400 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">Login</button>
  
</div>
</div>
</div>

</div>
</div>
   )
}

export default employeelogin
