import React from "react";
import { useNavigate } from "react-router-dom";
import figma from "../images/figma.png";
import react from "../images/react-icon.svg";
import arrow_white from "../images/arrow-white.svg";
import arrow_black from "../images/arrow-black.svg";

const Box = (props) => {
  const { bgColor, header, month, day, url, timeTaken } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${url}`);
  };

  return (
    <div
      className={` w-full p-1 ${
        bgColor ? "text-white" : "text-black"
      } cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className={`${
          bgColor
            ? "bg-purple-900 hover:bg-purple-800 "
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        <div className="p-10 h-84">
          <div>
            <div>{month}</div>
            <div className="font-black">{day}</div>
          </div>
          <div className="font-semibold text-2xl pt-5 pb-10">{header}</div>
          <div className="flex">
            <a
              href="https://www.figma.com/file/EWmzcVkd7qbP5Nf7iMvuqP/Trafalgar-Landing-Page"
              target="blank"
            >
              <img className="w-12 h-12" src={figma} alt="figma" />
            </a>
            <img className="w-12 h-12 bg-white ml-2" src={react} alt="figma" />
          </div>
          <div className="flex justify-between pt-5">
            <div>
              <p>Figma to React</p>
              <p>{timeTaken}</p>
            </div>
            <div className="ml-10 r-0">
              <img
                src={`${bgColor ? arrow_white : arrow_black}`}
                className="arrow"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
