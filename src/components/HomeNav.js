import React from "react";
import figma from "../images/figma.png";
import react from "../images/react-icon.svg";

const HomeNav = () => {
  return (
    <nav className="border-b-2">
      <div className="flex container mx-auto">
        <div className="flex">
          <img className="h-12" src={figma} alt="figma" />
          <p className="pt-3 font-semibold">to</p>
          <img className="h-12" src={react} alt="react" />
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
