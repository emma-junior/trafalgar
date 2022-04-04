import React from 'react'
import {Dots} from "./Dots";
import vector from '../images/Vector.svg'
import searchDoctor from '../images/Frame.svg'
import onlinePharm from '../images/drug.svg'
import consultation from '../images/phone.svg'
import detailsInfo from '../images/detailsInfo.svg'
import emergencyCare from '../images/emergency.svg'
import tracking from '../images/tracking.svg'


const Services = () => {
  return (
    <div className="mt-52 relative">
      <div className="text-center">
        <h2 className="font-bold text-[36px]">Our services</h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10 mx-auto"></div>
        <p className="text-[#666] w-2/3 mx-auto my-10">
          We provide to you the best choices for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of services is suitable for
          your health
        </p>
      </div>
      <div className="absolute top-44 w-[600px] h-[300px] -z-20">
        <img className="" src={vector} alt="vector" />
      </div>
      <div className="mx-32 mb-20 relative">
        <div className='absolute right-0 top-40 -z-20'>
          <Dots />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className=" bg-white w-64 p-7 rounded-md shadow-lg shadow-black-500/50">
            <img
              className="w-16 h-16 my-4"
              src={searchDoctor}
              alt="searchDoctor"
            />
            <h2 className="font-bold mb-3">Search Doctor</h2>
            <p className="text-[#666] text-sm">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className=" bg-white w-64 p-7 rounded-md shadow-lg shadow-black-500/50">
            <img
              className="w-16 h-16 my-4"
              src={onlinePharm}
              alt="onlinePharm"
            />
            <h2 className="font-bold mb-3">Online Pharmacy</h2>
            <p className="text-[#666] text-sm">
              Buy your medicines with our mobile application with a simple
              delivery system
            </p>
          </div>
          <div className=" bg-white w-64 p-7 rounded-md shadow-lg shadow-black-500/50">
            <img
              className="w-16 h-16 my-4"
              src={consultation}
              alt="consultation"
            />
            <h2 className="font-bold mb-3">Consultation</h2>
            <p className="text-[#666] text-sm">
              Free consultation with our trusted doctors and get the best
              recommendations
            </p>
          </div>
          <div className=" bg-white w-64 p-7 rounded-md shadow-lg shadow-black-500/50">
            <img
              className="w-16 h-16 my-4"
              src={detailsInfo}
              alt="detailsInfo"
            />
            <h2 className="font-bold mb-3">Details info</h2>
            <p className="text-[#666] text-sm">
              Free consultation with our trusted doctors and get the best
              recommendations
            </p>
          </div>
          <div className=" bg-white w-64 p-7 rounded-md shadow-lg shadow-black-500/50">
            <img
              className="w-16 h-16 my-4"
              src={emergencyCare}
              alt="detailsInfo"
            />
            <h2 className="font-bold mb-3">Emergency care</h2>
            <p className="text-[#666] text-sm">
              You can get 24/7 urgent care for yourself or your children and
              your lovely family
            </p>
          </div>
          <div className=" bg-white w-64 p-7 rounded-md shadow-lg shadow-black-500/50">
            <img className="w-16 h-16 my-4" src={tracking} alt="tracking" />
            <h2 className="font-bold mb-3">Tracking</h2>
            <p className="text-[#666] text-sm">
              Track and save your medical history and health data
            </p>
          </div>
        </div>
      </div>
      <button className=" mx-[500px] text-[#458FF6] border-2 border-[#458FF6] py-2 px-8 rounded-full ">
        Learn more
      </button>
    </div>
  );
}

export default Services