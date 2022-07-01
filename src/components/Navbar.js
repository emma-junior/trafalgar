import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [underline, setUnderline] = useState({
    homeLine: false,
    findDocLine: false,
    appsLine: false,
    testimonialsLine: false,
    aboutUsLine: false,
  });

  console.log(underline);
  return (
    <div className="my-8 flex w-[90%] justify-between mx-auto">
      <div className="flex">
        <h1 className="bg-[#458FF6] w-10 h-10 rounded-full justify-center">
          <h2 className="pl-3 pt-1 text-2xl text-white font-bold">T</h2>
        </h1>
        <h2 className="text-2xl font-bold ml-2 pt-1">Trafalgar</h2>
        <div className="lg:hidden block">
          <h2
            className="ml-28 md:ml-[450px] mt-3 text-2xl"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FaBars />
          </h2>
          {toggleMenu && (
            <ul className="absolute z-10 right-8 bg-[#458FF6] p-4 text-lg text-white shadow-lg shadow-black-500/50">
              <li className="cursor-pointer pt-1 ">Home</li>
              <li className="cursor-pointer pt-1 ">Find a doctor</li>
              <li className="cursor-pointer pt-1 ">Apps</li>
              <li className="cursor-pointer pt-1 ">Testimonials</li>
              <li className="cursor-pointer pt-1 ">About us</li>
            </ul>
          )}
        </div>
      </div>

      <motion.div
        className="p-3 lg:flex hidden"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <div
          className="mr-10"
          onMouseEnter={() => setUnderline({ ...underline, homeLine: true })}
          onMouseLeave={() => setUnderline({ ...underline, homeLine: false })}
        >
          <button className="text-[#1F1534] ">Home</button>
          <div
            className={`h-0.5 mt-2 bg-gray-900 w-10 absolute mx-auto ${
              underline.homeLine ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div
          onMouseEnter={() => setUnderline({ ...underline, findDocLine: true })}
          onMouseLeave={() =>
            setUnderline({ ...underline, findDocLine: false })
          }
        >
          <button className="text-[#666] mr-10">Find a doctor</button>
          <div
            className={`h-0.5 my-2 bg-gray-900 w-[90px] absolute ${
              underline.findDocLine ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div
          className=""
          onMouseEnter={() => setUnderline({ ...underline, appsLine: true })}
          onMouseLeave={() => setUnderline({ ...underline, appsLine: false })}
        >
          <button className="text-[#666] mr-10">Apps</button>
          <div
            className={`h-0.5 my-2 bg-gray-900 w-10 absolute ${
              underline.appsLine ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div
          onMouseEnter={() =>
            setUnderline({ ...underline, testimonialsLine: true })
          }
          onMouseLeave={() =>
            setUnderline({ ...underline, testimonialsLine: false })
          }
        >
          <button className="text-[#666] mr-10">Testimonials</button>
          <div
            className={`h-0.5 my-2 bg-gray-900 w-[85px] absolute ${
              underline.testimonialsLine ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div
          onMouseEnter={() => setUnderline({ ...underline, aboutUsLine: true })}
          onMouseLeave={() =>
            setUnderline({ ...underline, aboutUsLine: false })
          }
        >
          <button className="text-[#666] mr-10">About us</button>
          <div
            className={`h-0.5 my-2 bg-gray-900 w-[62px] absolute ${
              underline.aboutUsLine ? "block" : "hidden"
            }`}
          ></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
