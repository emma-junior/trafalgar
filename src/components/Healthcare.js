import React from 'react'
import trafalgarImg from '../images/trafalgar-header.svg'
import { Dot } from "./Dots";
import { motion } from "framer-motion";

const Healthcare = () => {
  return (
    <motion.div className="flex mt-24" animate={{y: -40}} transition={{type: 'spring', duration: 1, bounce: 0.3}}>
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
    </motion.div>
  );
}

export default Healthcare