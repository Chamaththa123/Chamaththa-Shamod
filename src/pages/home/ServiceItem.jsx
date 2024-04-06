import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

export const ServiceItem = ({ title, des, key }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });


  const prevDelay = 1000;
  const [isVisible, setIsVisible] = useState(false);
  const fadeDes = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: prevDelay + 200,
      easing: easings.easeInSine,
    },
  });

  useEffect(() => {
    const loaderDelay = 200;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);
  return (
    <animated.div style={fadeDes} className=' flex flex-col md:w-[45%] w-full mb-10 gap-5' ref={ref} key={key}>
      <div className="text-sky-950 xl:text-2xl text-lg font-semibold leading-[70px]">{title}</div>
      <div className="border-t-[0.5px] border-black w-[100%] md:w-[100%] " />
      <div className="text-black text-base xl:text-lg font-normal leading-[35px]">
        {des}
      </div>
    </animated.div>
  )
}
