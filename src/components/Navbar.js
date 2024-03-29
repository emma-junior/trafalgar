import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { navbarLinks } from "../data";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="my-8 w-full flex justify-center ">
      <section className="flex w-[90%] lg:w-[85%]  justify-between">
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
          </div>
        </div>
        <motion.ul
          className="p-3 lg:flex hidden space-x-5 w-full justify-end"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          {navbarLinks.map((link, index) => {
            return (
              <li key={index} className="nav">
                {link.name}
              </li>
            );
          })}
        </motion.ul>
      </section>
    </nav>
  );
};

export default Navbar;
