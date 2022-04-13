import React, { useState } from 'react'
import { motion } from "framer-motion";

const Navbar = () => {

  const [homeLine, setHomeLine] = useState(false)
  const [findDocLine, setFindDocLine] = useState(false);
  const [appsLine, setAppsLine] = useState(false);
  const [testimonialsLine, setTestimonialsLine] = useState(false);
  const [aboutUs, setAboutUsLine] = useState(false);

  return (
    <div className="m-8 flex">
      <div className="flex mr-96">
        <h1 className="bg-[#458FF6] w-10 h-10 rounded-full justify-center">
          <h2 className="pl-3 pt-1 text-2xl text-white font-bold">T</h2>
        </h1>
        <h2 className="text-2xl font-bold ml-2 pt-1">Trafalgar</h2>
      </div>
      <motion.div
        className="p-3 flex"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <div
          className="mr-10"
          onMouseEnter={() => setHomeLine(true)}
          onMouseLeave={() => setHomeLine(false)}
        >
          <button className="text-[#1F1534]">Home</button>
          <div
            className={`h-0.5 my-2 bg-gray-900 w-10 mx-auto ${
              homeLine ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div
          onMouseEnter={() => setFindDocLine(true)}
          onMouseLeave={() => setFindDocLine(false)}
        >
          <button className="text-[#666] mr-10">Find a doctor</button>
          <div
            className={`h-0.5 my-2 bg-gray-900 w-[90px] ${
              findDocLine ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div
          onMouseEnter={() => setAppsLine(true)}
          onMouseLeave={() => setAppsLine(false)}
        >
          <button className="text-[#666] mr-10">Apps</button>
          <div
            className={`h-0.5 my-2 bg-gray-900 w-10 ${
              appsLine ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div
          onMouseEnter={() => setTestimonialsLine(true)}
          onMouseLeave={() => setTestimonialsLine(false)}
        >
          <button className="text-[#666] mr-10">Testimonials</button>
          <div
            className={`h-0.5 my-2 bg-gray-900 w-[85px] ${
              testimonialsLine ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div
          onMouseEnter={() => setAboutUsLine(true)}
          onMouseLeave={() => setAboutUsLine(false)}
        >
          <button className="text-[#666] mr-10">About us</button>
          <div
            className={`h-0.5 my-2 bg-gray-900 w-[62px] ${
              aboutUs ? "block" : "hidden"
            }`}
          ></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar