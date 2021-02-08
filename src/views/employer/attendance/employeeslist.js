import React from 'react';

const EmployeeList = () => {
    return (
        <div className="bg-white p-2">
                <p className="text-center font-extrabold text-2xl pt-4">Employee List</p>

                <div className="mt-4 px-4">
      <label class="block">
  <span class="text-base">Date</span>
  <div class="form-input select-text bg-gray-200 mt-3 block w-40 h-9 rounded-lg text-center text-2xl">12-01-2021</div>
</label>
</div>

 <div className="mt-4 px-4">
      <label class="block">
  <span class="text-base">Time-Start</span>
  <div class="form-input select-text bg-gray-200 mt-3 block w-40 h-9 rounded-lg text-center text-2xl">09:00AM</div>
</label>
</div>

<div className="mt-4 px-4">
      <label class="block">
  <span class="text-base">Time-End</span>
  <div class="form-input select-text bg-gray-200 mt-3 block w-40 h-9 rounded-lg text-center text-2xl">07:00PM</div>
</label>
</div>

<div className="mt-4 px-4">
      <label class="block">
  <span class="text-base">Status</span>
  <div class="form-input select-text bg-gray-200 mt-3 block w-40 h-9 rounded-lg text-center text-2xl">PRESENT</div>
</label>
</div>
        </div>
    )
}

export default EmployeeList;