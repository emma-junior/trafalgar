import React from "react";
import trafalgarPic from "../images/trafalgar-secondimg.svg";

const LeadingHealthcare = () => {
  return (
    <div className="lg:my-24 my-5 w-[90%] justify-center mx-auto lg:flex block">
      <div className="lg:w-1/2 w-4/5 mx-auto lg:mr-8">
        <img src={trafalgarPic} alt="trafalgarPic" />
      </div>
      <div className="lg:w-1/2 m-8 lg:m-1 lg:mt-12 mt-7">
        <h2 className="lg:text-4xl text-3xl font-bold mb-7">
          Leading healthcare Providers
        </h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10"></div>
        <p className="text-[#666]">
          Trafalgar provides progressive and affordable healthcare, accessible
          on mobile and online for everyone. To us is not just work. We take
          pride in the solutions we deliver
        </p>
        <button className=" mt-5 text-[#458FF6] border-2 border-[#458FF6] py-2 px-8 rounded-full ">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default LeadingHealthcare;
