import React from 'react'
import trafalgarPic from '../images/trafalgar-secondimg.svg'

const LeadingHealthcare = () => {
  return (
    <div className="m-24 flex">
      <div className="w-1/2 mr-8">
        <img src={trafalgarPic} alt="trafalgarPic" />
      </div>
      <div className="w-1/2 mt-12">
        <h2 className="font-bold">Leading healthcare Providers</h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10"></div>
        <p className="text-[#666]">
          Trafalgar provides progressive and affordable healthcare, accessible
          on mobile and online for everyone. To us is not just work. We take
          pride in the solutions we deliver
        </p>
        <button className=" my-7 text-[#458FF6] border-2 border-[#458FF6] py-2 px-8 rounded-full ">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default LeadingHealthcare