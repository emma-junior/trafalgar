import React from "react";
import downloadAppimg from "../images/trafalgar-third-img.svg";

const DownloadApp = () => {
  return (
    <div className="lg:flex w-[90%] mx-auto justify-center">
      <div className="lg:w-1/3 w-4/5 mx-auto lg:m-24 mr-8">
        <h2 className="lg:text-3xl text-2xl font-bold mt-10">
          Download our mobile apps
        </h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10"></div>
        <p className="text-[#666]">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously [no tedeous form, long calls, or
          administrative hassle] and securely
        </p>
        <button className=" my-7 text-[#458FF6] border-2 border-[#458FF6] py-2 px-8 rounded-full ">
          Download
        </button>
      </div>
      <div className="lg:w-2/3 ">
        <img src={downloadAppimg} alt="downloadAppimg" />
      </div>
    </div>
  );
};

export default DownloadApp;
