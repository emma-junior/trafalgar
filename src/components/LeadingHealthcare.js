import React from "react";
import trafalgarPic from "../images/trafalgar-secondimg.svg";
import { motion } from "framer-motion";
import Button from "./Button";
import useAnimate from "../animations";

const LeadingHealthcare = () => {
  const { ref, animationy } = useAnimate();
  return (
    <div
      ref={ref}
      className="lg:my-24 my-16 lg:w-[85%] w-[90%] justify-between mx-auto lg:flex block"
    >
      <motion.div animate={animationy} className="lg:w-2/5 w-5/5 mx-auto">
        <img src={trafalgarPic} alt="trafalgarPic" />
      </motion.div>
      <motion.div
        animate={animationy}
        className="lg:w-2/5 m-8 lg:m-1 lg:mt-12 mt-7"
      >
        <h2 className="lg:text-4xl text-3xl font-bold mb-7">
          Leading healthcare Providers
        </h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10"></div>
        <p className="text-[#666]">
          Trafalgar provides progressive and affordable healthcare, accessible
          on mobile and online for everyone. To us is not just work. We take
          pride in the solutions we deliver
        </p>
        <div className="mt-5 mb-7">
          <Button text="Learn more" />
        </div>
      </motion.div>
    </div>
  );
};

export default LeadingHealthcare;
