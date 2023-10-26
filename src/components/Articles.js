import React from "react";
import vectorTwo from "../images/Vector-two.svg";
import articleArrow from "../images/articleArrow.svg";
import { motion } from "framer-motion";
import Button from "./Button";
import { articles } from "../data";
import useAnimate from "../animations";

const Articles = () => {
  const { ref, animationx, animationy } = useAnimate();

  return (
    <div ref={ref} className="lg:mt-40 mt-20 relative">
      <motion.h2
        className="font-bold text-center text-2xl"
        animate={animationy}
      >
        Check out our latest article
      </motion.h2>
      <motion.div
        animate={animationy}
        className="h-0.5 my-4 bg-gray-900 w-10 mx-auto"
      ></motion.div>
      <div className="absolute right-0 -z-20 ">
        <img className="h-[400px] w-[550px] " src={vectorTwo} alt="vectorTwo" />
      </div>
      <motion.div
        className="lg:w-[80%] w-[70%] mx-auto lg:my-16 flex flex-col items-center lg:flex lg:flex-row lg:justify-center md:grid md:grid-cols-2 md:gap-5"
        animate={animationx}
      >
        {articles.map((article) => {
          return (
            <div
              key={article.id}
              className="bg-white w-64 rounded-lg shadow-lg shadow-black-500/50 md:mr-8 mb-4"
            >
              <img
                className="rounded-lg h-44 mt-0"
                src={article.img}
                alt="articleOne"
              />
              <div className="p-4">
                <h2 className="font-bold">{article.topic}</h2>
                <p className="py-3 text-[#666] text-sm">{article.content}</p>
                <div className="flex items-center h-[100%]">
                  <button className="text-[#4089ED] mr-2">Read more</button>
                  <figure>
                    <img
                      className="mt-[3px]"
                      src={articleArrow}
                      alt="arrowRight"
                    />
                  </figure>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      <div className="flex w-[100%] justify-center">
        <motion.div animate={animationx} className="mx-auto mb-20 lg:mb-28">
          <Button text="View all" />
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
