import React from 'react';
import { Link } from 'react-router-dom';
const SearchJob = () => {
    return (
        <div className="bg-white p-2">
        <p className="text-center font-extrabold text-2xl pt-4">Search Jobs</p>
        <label>
         <input className="flex form-input mt-6 block w-10/12 bg-gray-200 p-3 ml-8 rounded-xl" placeholder="eg. UI/UX Design"/>
        </label>
        <p className="ml-8 font-bold text-sm pt-4">32 job opportunity</p>
        <div class="flex flex-row mr-8">
         <button class="flex form-input mt-6 block w-32 bg-gray-200 p-3 ml-8 rounded-xl">Most Relevant</button>
         <button class="flex items-center form-input mt-6 block w-32 bg-gray-200 p-3 ml-2 rounded-xl">Most Recent</button>
        </div>
           
           {/*Card1*/}
    <div className="flex form-input mt-6 block w-10/12 bg-gray-200 p-3 ml-8 rounded-2xl">       

    <div class="flex items-start space-x-4">
      <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full"/>
    </div>
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700">
        <Link to='/employee/applyjobs'>Facebook</Link>
      </div>
      <div class="text-sm text-gray-500">
        Full Time UI designer . $8k - UK.
      </div>
    </div>
    <div class="p-2">
      <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-4 h-4 rounded-full order-1"/>
    </div>
  </div>
   {/*Card2*/}
    <div className="flex form-input mt-6 block w-10/12 bg-gray-200 p-3 ml-8 rounded-2xl">       

    <div class="flex items-start space-x-4">
      <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full"/>
    </div>
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700">
        <Link to='/employee/applyjobs'>InfoTech</Link>
      </div>
      <div class="text-sm text-gray-500">
        Full Time UI designer . $8k - UK.
      </div>
    </div>
    <div class="p-2">
      <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-4 h-4 rounded-full order-1"/>
    </div>
  </div>
  {/*Card2*/}
    <div className="flex form-input mt-6 block w-10/12 bg-gray-200 p-3 ml-8 rounded-2xl">       

    <div class="flex items-start space-x-4">
      <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full"/>
    </div>
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700">
        <Link to='/employee/applyjobs'>Google</Link>
      </div>
      <div class="text-sm text-gray-500">
         Part time UI designer . $9k - US.
      </div>
    </div>
    <div class="p-2">
      <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-4 h-4 rounded-full order-1"/>
    </div>
  </div>
  {/*Card2*/}
    <div className="flex form-input mt-6 block w-10/12 bg-gray-200 p-3 ml-8 rounded-2xl">       

    <div class="flex items-start space-x-4">
      <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full"/>
    </div>
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700">
        <Link to='/employee/applyjobs'>TCS</Link>
      </div>
      <div class="text-sm text-gray-500">
        Fulltime DB Engineer . $5k - UK.
      </div>
    </div>
    <div class="p-2">
      <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-4 h-4 rounded-full order-1"/>
    </div>
  </div>
  {/*Card2*/}
    <div className="flex form-input mt-6 block w-10/12 bg-gray-200 p-3 ml-8 rounded-2xl">       

    <div class="flex items-start space-x-4">
      <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full"/>
    </div>
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700">
        <Link to='/employee/applyjobs'>ZOHO</Link>
      </div>
      <div class="text-sm text-gray-500">
        Full Time ROR devoloper . $9k - SI.
      </div>
    </div>
    <div class="p-2">
      <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-4 h-4 rounded-full order-1"/>
    </div>
  </div>
        </div>


         

    )
}

export default SearchJob;