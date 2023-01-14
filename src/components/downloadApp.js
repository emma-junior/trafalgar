import React from "react";
import downloadAppimg from "../images/trafalgar-third-img.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Button from "./Button";

const DownloadApp = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const content = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: -30,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    }
    if (!inView) {
      animation.start({
        y: 0,
      });
    }
  }, [inView, animation]);

  useEffect(() => {
    if (inView) {
      content.start({
        y: -20,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
    if (!inView) {
      content.start({
        y: 0,
        opacity: 0,
      });
    }
  }, [inView, content]);
  return (
    <div
      ref={ref}
      className="lg:flex lg:w-[80%] w-[90%] mx-auto justify-between"
    >
      <motion.div className="lg:w-5/12 w-4/5 mx-auto lg:mx-1" animate={content}>
        <h2 className="lg:text-3xl text-2xl font-bold mt-10">
          Download our mobile apps
        </h2>
        <div className="h-0.5 my-4 bg-gray-900 w-10"></div>
        <p className="text-[#666]">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously [no tedeous form, long calls, or
          administrative hassle] and securely
        </p>
        <div className="my-7">
          <Button text="Download" />
        </div>
      </motion.div>
      <motion.div className="lg:w-6/12" animate={animation}>
        <img src={downloadAppimg} alt="downloadAppimg" />
      </motion.div>
    </div>
  );
};

export default DownloadApp;
