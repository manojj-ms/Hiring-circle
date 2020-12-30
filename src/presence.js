import React from 'react'

export default function presence() {
    return (
        <div>
           <div className="wrapper: h-screen w-screen bg-white-400 flex items-center justify-center">
  <div class="card: w-64    mt-10  flex flex-col items-center text-center">
      <div className="w-70 h-15 bg-blue-100 rounded-lg mb-3 flex items-center mx:auto justify-start">
      <button className="rounded-fullflex flex-row justify-start ">
  <div className="flex flex-row justify-start mx:auto text-gray-400 text-xs lh mt-2   px-2 py-1 hover:bg-gray-300 font-semibold "> 
  <div className="rounded-full">
  
<svg className="fill-current text-gray-400 w-2 h-2 text-red-500 mr-1 mt-1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg>
</div>
<div className="">
    you are at
  </div>
  
  </div>
  <h6 className="ml-2 mr-2 font-semibold text-grey-200" >Main Building Area</h6>
  </button>
      </div>
    
    <div className="card__img: w-29 text-center">
      <img className="object-contain   w-29 " src={"/images/building.png"} alt="fire" />
    </div>
    <h1 className="card__title: text-black-800 font-bold pretext">06.41 AM</h1>
    <h6 className="text-xs font-semibold text-black-100">Friday, 26 June 2020</h6>
    

    <div className="card__form: w-full flex flex-col my-6" onsubmit="return false">
      
      <button className="card__submit: w-full h-8 rounded-lg bg-purple-700 border-none font-semibold text-white" type="submit">START SHIFT</button>
      <p className="card__infos: text-indigo-900 text-sm mt-3">Get weekly updates on what's happening in the tech industry.</p>
    </div>
  </div>
</div> 
        </div>
    )
}
