import React from "react";
import { Dots } from "./Dots";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 via-blue-400 to-blue-500 lg:py-24 py-7 px-5 lg:flex relative">
      <div className="absolute right-[80px] -top-20 -z-20">
        <Dots />
      </div>
      <div className="lg:flex lg:w-[80%] justify-center mx-auto">
        <div className="lg:w-2/5 lg:mr-12 mb-8">
          <div className="flex mb-6">
            <h1 className="bg-white w-10 h-10 rounded-full justify-center">
              <span className="inline-block text-blue-400 text-center font-semibold text-2xl bg-white rounded-full w-8 h-8 ml-1 mt-1">
                T
              </span>
            </h1>
            <h2 className="text-2xl text-white font-bold ml-2 pt-1">
              Trafalgar
            </h2>
          </div>
          <p className="text-white text-xl">
            Trafalgar provides progressive, and affordable Healthcare,
            accessible on mobile and online for everyone
          </p>
          <br />
          <p className="text-white text-xl">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <div className="flex">
          <div className="lg:w-1/5 text-white lg:mr-16 mr-3">
            <h2 className="font-bold">Company</h2>
            <ul className="mt-4 lg:mt-9">
              <li>About</li>
              <li className="mt-2">Testimonials</li>
              <li className="mt-2">Find a doctor</li>
              <li className="mt-2">Apps</li>
            </ul>
          </div>
          <div className="lg:w-1/5 text-white lg:mr-16 mr-3">
            <h2 className="font-bold">Region</h2>
            <ul className="mt-4 lg:mt-9">
              <li>Indonesia</li>
              <li className="mt-2">Singapore</li>
              <li className="mt-2">Hongkong</li>
              <li className="mt-2">Canada</li>
            </ul>
          </div>
          <div className="lg:w-1/5 text-white">
            <h2 className="font-bold">Help</h2>
            <ul className="mt-4 lg:mt-9">
              <li>Help center</li>
              <li className="mt-2">Contact support</li>
              <li className="mt-2">Instructions</li>
              <li className="mt-2">How it works</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-2">
        <Dots />
      </div>
    </div>
  );
};

export default Footer;
