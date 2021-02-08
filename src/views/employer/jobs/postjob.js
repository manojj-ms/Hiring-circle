import React from 'react';

const PostJob = () => {
    return (
        <div classname="py-4 bg-white">
         <p className="text-center font-extrabold text-2xl pt-4">Post Jobs</p>

         <div class="mt-8 px-4">
  <span class="text-base">Select Type Of Job</span>
  <div class="mt-2">
    <label class="inline-flex items-center">
      <input type="radio" class="form-radio" name="accountType" value="personal"/>
      <span class="ml-2 text-base">Regular</span>
    </label>
    <label class="inline-flex items-center ml-6">
      <input type="radio" class="form-radio" name="accountType" value="busines"/>
      <span class="ml-2 text-base">Work From Home</span>
    </label>
  </div>

</div>

<div className="mt-4 px-4">
      <label class="block">
  <span class="text-base">Name</span>
  <input class="form-input bg-gray-200 mt-3 block w-full h-9 rounded-lg" placeholder="Enter the Job name"/>
</label>
</div>

<div className="mt-4 px-4">
      <label class="block">
  <span class="text-base">Description</span>
  <input class="form-input bg-gray-200 mt-3 block w-full h-28 rounded-lg"/>
</label>
</div>

<div className="mt-4 px-4">
      <label class="block">
  <span class="text-base">Location</span>
  <select class="form-select bg-gray-200 block w-full mt-3 h-9 rounded-lg">
    <option>Singapore</option>
    <option>Other</option>
  </select>
</label>
</div>

<div className="mt-4 px-4">
      <label class="block">
  <span class="text-base">No of Openings</span>
  <input class="form-input bg-gray-200 mt-3 block w-full h-9 rounded-lg" placeholder="Enter the Openings here"/>
</label>
</div>

<div className="mt-4 px-4">
<div class="block">
  <span class="text-base">Start Date</span>
  <div class="mt-2">
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="form-radio text-base" name="radio" value="1" checked/>
        <span class="ml-2 text-base">Immediately(within 30 days)</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="form-radio text-base" name="radio" value="2"/>
        <span class="ml-2 text-base">Later</span>
      </label>
    </div>
  </div>
</div>


</div>

<div className="mt-4 px-4 pb-4">
      <label class="block">
  <span class="text-base">Stipend</span>
  <input class="form-input bg-gray-200 mt-3 block w-full h-9 rounded-lg" placeholder="Enter the Stiped Details"/>
</label>

<button class=" px-4 justify-center mt-6 bg-blue-700 text-white border border-blue-700 font-bold py-2 w-full rounded-lg">
  Submit
</button>

</div>

        </div>
    )
}

export default PostJob;