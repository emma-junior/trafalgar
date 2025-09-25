import React from "react";
import trafalgarImg from "../images/trafalgar-header.svg";
import { Dot } from "./Dots";
import { motion } from "framer-motion";

const Healthcare = () => {
  return (
    <>
      <div className="absolute">
        <Dot />
      </div>
      <motion.div
        className="lg:flex lg:w-[75%] w-[90%] justify-between mx-auto mt-24"
        animate={{ y: -40 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <div className="lg:w-[36%] lg:mt-40 mt-10">
          <h2 className="lg:w-[90%] lg:text-4xl text-3xl font-bold mb-7">
            Virtual Healthcare for you
          </h2>
          <p className="text-[#7D7987] lg:mb-9 mb-7 text-xl">
            Trafalgar provides progressive, and affordable Healthcare,
            accessible on mobile and online for everyone.
          </p>
          <button className="bg-[#458FF6] py-2 px-8 rounded-full text-white mb-7">
            Consult today
          </button>
        </div>
        <div className=" lg:w-[55%] h-80 w-11/12">
          <img className="w-full " src={trafalgarImg} alt="trafalgarImg" />
        </div>
      </motion.div>
    </>
  );
};

export default Healthcare;
