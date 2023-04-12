import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const useAnimate = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const animationx = useAnimation();
  const animationy = useAnimation();

  useEffect(() => {
    if (inView) {
      animationy.start({
        y: -10,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
    if (!inView) {
      animationy.start({
        y: 10,
        opacity: 0,
      });
    }
    if (inView) {
      animationx.start({
        x: 0,
        transition: { type: "spring", duration: 2, bounce: 0.3 },
      });
    }
    if (!inView) {
      animationx.start({
        x: "-100vw",
      });
    }
  }, [inView, animationx, animationy]);

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: { type: "spring", duration: 2, bounce: 0.3 },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       x: "-100vw",
  //     });
  //   }
  // }, [inView, animation]);
  return { ref, animationx, animationy };
};

export default useAnimate;
