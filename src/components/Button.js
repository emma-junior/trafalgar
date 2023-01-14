import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-[#458FF6] border-2 border-[#458FF6] py-2 px-8 rounded-full hover:bg-[#458FF6] hover:text-white ">
      {text}
    </button>
  );
};

export default Button;
