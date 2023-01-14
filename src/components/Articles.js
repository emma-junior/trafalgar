import React from "react";
import vectorTwo from "../images/Vector-two.svg";
import articleOne from "../images/article-one.jpg";
import articleTwo from "../images/article-two.jpg";
import articleThree from "../images/article-three.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Button from "./Button";

const Articles = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const topic = useAnimation();

  useEffect(() => {
    if (inView) {
      topic.start({
        y: -20,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
    if (!inView) {
      topic.start({
        y: 0,
        opacity: 0,
      });
    }
  }, [inView, topic]);

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 2, bounce: 0.3 },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView, animation]);

  return (
    <div ref={ref} className="lg:mt-40 mt-20 relative">
      <motion.h2 className="font-bold text-center text-2xl" animate={topic}>
        Check out our latest article
      </motion.h2>
      <motion.div
        animate={topic}
        className="h-0.5 my-4 bg-gray-900 w-10 mx-auto"
      ></motion.div>
      <div className="absolute right-0 -z-20 ">
        <img className="h-[400px] w-[550px] " src={vectorTwo} alt="vectorTwo" />
      </div>
      <motion.div
        className="lg:w-[80%] justify-center w-[70%] mx-auto lg:my-16 lg:flex md:grid md:grid-cols-2 gap-5"
        animate={animation}
      >
        <div className="bg-white w-64 rounded-lg shadow-lg shadow-black-500/50 mr-8 mb-4">
          <img
            className="rounded-lg h-44 mt-0"
            src={articleOne}
            alt="articleOne"
          />
          <div className="p-4">
            <h2 className="font-bold">
              Disease detection, check up in the laboratory
            </h2>
            <p className="py-3 text-[#666] text-sm">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <button className="text-[#4089ED]">Read more</button>
          </div>
        </div>
        <div className="bg-white w-64 rounded-lg shadow-lg shadow-black-500/50 mr-8 mb-4">
          <img
            className="rounded-lg h-44 mt-0"
            src={articleTwo}
            alt="articleTwo"
          />
          <div className="p-4">
            <h2 className="font-bold">
              Herbal medicines that are safe for consumption
            </h2>
            <p className="py-3 text-[#666] text-sm">
              Herbal medicines is very widely used at this time because its very
              good for your health...
            </p>
            <button className="text-[#4089ED]">Read more</button>
          </div>
        </div>
        <div className="bg-white w-64 rounded-lg shadow-lg shadow-black-500/50 mb-4">
          <img
            className="rounded-lg h-44 mt-0"
            src={articleThree}
            alt="articleThree"
          />
          <div className="p-4">
            <h2 className="font-bold">Natural care for healthy facial skin</h2>
            <p className="py-3 text-[#666] text-sm">
              A healthy lifestyle should start from now and also for your skin
              health. There are some...
            </p>
            <button className="text-[#4089ED]">Read more</button>
          </div>
        </div>
      </motion.div>
      <div className="flex w-[100%] justify-center">
        <motion.div animate={animation} className="mx-auto mb-20 lg:mb-28">
          <Button text="View all" />
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
