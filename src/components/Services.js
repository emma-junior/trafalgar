import React from "react";
import { Dots } from "./Dots";
import vector from "../images/Vector.svg";
import searchDoctor from "../images/Frame.svg";
import onlinePharm from "../images/drug.svg";
import consultation from "../images/phone.svg";
import detailsInfo from "../images/detailsInfo.svg";
import emergencyCare from "../images/emergency.svg";
import tracking from "../images/tracking.svg";
import { motion } from "framer-motion";
import Button from "./Button";
import useAnimate from "../animations";

const Services = () => {
  const { ref, animationx, animationy } = useAnimate();

  const services = [
    {
      id: 1,
      icon: searchDoctor,
      title: "Search Doctor",
      content:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      id: 2,
      icon: onlinePharm,
      title: "Online Pharmacy",
      content:
        "Buy your medicines with our mobile application with a simple delivery system",
    },
    {
      id: 3,
      icon: consultation,
      title: "Consultation",
      content:
        "Free consultation with our trusted doctors and get the best recommendations",
    },
    {
      id: 4,
      icon: detailsInfo,
      title: "Details info",
      content:
        "Free consultation with our trusted doctors and get the best recommendations",
    },
    {
      id: 5,
      icon: emergencyCare,
      title: "Emergency care",
      content:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      id: 6,
      icon: tracking,
      title: "Tracking",
      content: "Track and save your medical history and health data",
    },
  ];

  return (
    <div ref={ref} className="md:mt-64 relative">
      <motion.div animate={animationy} className="text-center">
        <h2 className="font-bold text-[36px]">Our services</h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10 mx-auto"></div>
        <p className="text-[#666] w-2/3 mx-auto my-10">
          We provide to you the best choices for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of services is suitable for
          your health
        </p>
      </motion.div>
      <div className="absolute top-44 w-[600px] h-[300px] -z-20">
        <img className="" src={vector} alt="vector" />
      </div>
      <div className=" lg:mb-20 relative mx-auto">
        <div className="absolute right-0 top-40 -z-20">
          <Dots />
        </div>
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:w-[80%] w-full justify-center mx-auto "
          animate={animationx}
        >
          {services.map((service) => {
            return (
              <div className=" bg-white w-64 p-7 rounded-md shadow-lg shadow-black-500/50">
                <img
                  className="w-16 h-16 my-4"
                  src={service.icon}
                  alt="searchDoctor"
                />
                <h2 className="font-bold mb-3">{service.title}</h2>
                <p className="text-[#666] text-sm">{service.content}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="flex w-[100%] justify-center">
        <motion.div animate={animationx} className="mt-6 lg:mt-2 mb-16">
          <Button text="Learn more" />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
