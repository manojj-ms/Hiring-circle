import React from 'react';

const CheckOut = () => {
    return (
        <div className="bg-white">
      <p className="text-center font-extrabold text-2xl pt-4">Check-Out</p>
      <div className="wrapper: h-screen w-screen bg-white-400 flex items-center justify-center">
        <div className="card: w-72 pt-16 flex flex-col items-center text-center">
          <div className="max-w-md h-15 bg-gray-100 rounded flex items-center mx:auto justify-start">
            <button className="rounded-fullflex flex-row justify-start">
              <div className="flex flex-row justify-start text-gray-400 text-xs lh mx-2 my-1 hover:bg-gray-300 font-semibold ">
                <div className="rounded-full">

                  <svg className="fill-current text-gray-400 w-2 h-2 text-red-500 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div className="">
                  You are at
  </div>

              </div>
              <h6 className=" font-semibold text-grey-200 pb-2 px-2 py-2 pt-0">Main Building Area</h6>
            </button>
          </div>

          <div className="card__img: w-29 text-center py-7 ml-9">
            <img className="object-contain   w-29 " src={"/images/building.png"} alt="fire" />
          </div>
          <h1 className="card__title: text-black-800 font-bold pretext">06.41 AM</h1>
          <h6 className="text-xs font-semibold text-black-100">Friday, 26 June 2020</h6>


          <div className="card__form: w-full flex flex-col my-6" onsubmit="return false">

            <button className="card__submit: w-8/12 h-10 ml-12 rounded-xl bg-black border-none font-semibold text-white " type="submit">END SHIFT</button>
            <p className="card__infos: text-indigo-900 text-sm mt-3">Get weekly updates on what's happening in the tech industry.</p>
          </div>
        </div>
      </div></div>
    )
}

export default CheckOut;