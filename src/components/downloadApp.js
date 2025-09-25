import React from "react";
import downloadAppimg from "../images/trafalgar-third-img.svg";
import { motion } from "framer-motion";
import Button from "./Button";
import useAnimate from "../animations";

const DownloadApp = () => {
  const { ref, animationy } = useAnimate();
  return (
    <div
      ref={ref}
      className="lg:flex lg:w-[70%] w-[90%] mx-auto justify-between"
    >
      <motion.div
        className="lg:w-4/12 w-4/5 mx-auto lg:mx-1 lg:ml-[10%]"
        animate={animationy}
      >
        <h2 className="lg:text-3xl text-2xl font-bold mt-10">
          Download our mobile apps
        </h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10"></div>
        <p className="text-[#7D7987] text-lg">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously [no tedeous form, long calls, or
          administrative hassle] and securely
        </p>
        <div className="my-7">
          <Button text="Download" />
        </div>
      </motion.div>
      <motion.div className="lg:w-6/12" animate={animationy}>
        <img src={downloadAppimg} alt="downloadAppimg" />
      </motion.div>
    </div>
  );
};

export default DownloadApp;
