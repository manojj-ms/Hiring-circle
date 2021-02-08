import React from 'react';
import { Link } from 'react-router-dom';
const Attendance = () => {
    return (
        <div className="bg-white p-4">
        <p className="text-center font-extrabold text-2xl pt-4">Attendance</p>

        <div className="mt-4">
      <label class="block">
  <span class="text-base">Employees List</span>
  <select class="form-select bg-gray-200 block w-full mt-3 h-9 rounded-lg">
    <option>Armstrong</option>
    <option>Bala</option>
    <option>Charles</option>
  </select>
</label>
</div>

     <div className="mt-4">
    <div class="flex flex-col">
                <label class="leading-loose">Date</label>
                <div class="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md bg-gray-200 focus:outline-none text-gray-600" placeholder="25/02/2020"/>
                  <div class="absolute left-3 top-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
     </div>

     <button class=" px-4 justify-center mt-6 bg-blue-700 text-white border border-blue-700 font-bold py-2 w-full rounded-lg">
  <Link to='/employer/employeeslist'>Get Employee List</Link>
</button>

    </div>
    )
}

export default Attendance;