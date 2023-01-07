import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="my-8 w-full flex justify-center ">
      <section className="flex w-[90%]  justify-between">
        <div className="flex w-full  justify-between">
          <div className="flex">
            <h1 className="bg-[#458FF6] w-10 h-10 rounded-full justify-center">
              <h2 className="pl-3 pt-1 text-2xl text-white font-bold">T</h2>
            </h1>
            <h2 className="text-2xl font-bold ml-2 pt-1">Trafalgar</h2>
          </div>
          <div className="lg:hidden block">
            <h2
              className="mt-3 text-2xl"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <FaBars />
            </h2>
            {toggleMenu && (
              <ul className="absolute z-10 right-8 bg-[#458FF6] p-4 text-lg text-white shadow-lg shadow-black-500/50">
                <li className="cursor-pointer ">Home</li>
                <li className="cursor-pointer">Find a doctor</li>
                <li className="cursor-pointer">Apps</li>
                <li className="cursor-pointer">Testimonials</li>
                <li className="cursor-pointer">About us</li>
              </ul>
            )}
          </div>
        </div>
        <motion.div
          className="p-3 lg:flex hidden space-x-5 w-full justify-end"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <button className="text-[#1F1534] pb-2 hover:border-b-2 border-[#666] ">
            Home
          </button>
          <button className="text-[#666] pb-2 hover:border-b-2 border-[#666]">
            Find a doctor
          </button>
          <button className="text-[#666] pb-2 hover:border-b-2 border-[#666]">
            Apps
          </button>
          <button className="text-[#666] pb-2 hover:border-b-2 border-[#666]">
            Testimonials
          </button>
          <button className="text-[#666] pb-2 hover:border-b-2 border-[#666]">
            About us
          </button>
        </motion.div>
      </section>
    </nav>
  );
};

export default Navbar;
