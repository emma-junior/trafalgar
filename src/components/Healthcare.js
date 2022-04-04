import React from 'react'
import trafalgarImg from '../images/trafalgar-header.svg'
import { Dot } from "./Dots";

const Healthcare = () => {
  return (
    <div className="flex ">
      <div className="absolute">
        <Dot />
      </div>
      <div className="w-1/3 m-10 mt-40">
        <h2 className="text-4xl font-bold mb-7">Virtual Healthcare for you</h2>
        <p className="text-[#666] mb-7">
          Trafalgar provides progressive, and affordable Healthcare, accessible
          on mobile and online for everyone.
        </p>
        <button className="bg-[#458FF6] py-2 px-8 rounded-full text-white">
          Consult today
        </button>
      </div>
      <div className=" w-2/3 h-80">
        <img src={trafalgarImg} alt="trafalgarImg" />
      </div>
    </div>
  );
}

export default Healthcare