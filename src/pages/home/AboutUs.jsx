import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import abt from "./../../assets/images/about.png";
import circle from "./../../assets/images/circle.svg";
export const AboutUs = ({ scrollref }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const prevDelay = 200;

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,

    config: {
      duration: 800,
    },
  });

  const fadeSubTitle = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });
  const fadeTitle = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: prevDelay + 100,
      easing: easings.easeInSine,
    },
  });
  const fadeDes = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: prevDelay + 200,
      easing: easings.easeInSine,
    },
  });

  const fadeLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(20%)",
    config: {
      duration: 800,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });

  useEffect(() => {
    const loaderDelay = 50;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);
  return (
    <animated.section
      style={fadeScreen}
      ref={ref}
      className=" p-[30px] py-[60px] xl:px-[6%] xl:py-[4%] "
    >
       <animated.div
          className="text-black text-center font-raleway xl:text-6xl text-3xl font-bold xl:leading-[150px] leading-[50px]"
          style={fadeTitle}
        >
          Welcome to My Portfolio!
        </animated.div>
      <div className="xl:flex-row flex-col overflow-hidden flex  gap-[10%] items-center w-full h-auto">
      <div className=" xl:w-[40%] flex flex-col gap-7 xl:gap-4 items-start">
        <div ref={scrollref} />
        {/* <animated.div
          className="text-center text-rose-500 text-2xl font-medium xl:leading-[60px]"
          style={fadeSubTitle}
        >
          About us
        </animated.div> */}
       
        <animated.div
          className=" xl:hidden rounded-[10px] w-full h-auto  overflow-hidden"
          style={fadeSubTitle}
        >
          <img src={abt} className="w-[100%]  xl:h-auto object-cover " alt="" />
        </animated.div>


        <animated.div
          style={fadeLeft}
          className=" rounded-[10px] max-w-[520px] xl:max-h-[680px]  overflow-hidden"
        >
          
          <img
            src={abt}
            className="w-[100%]  xl:h-auto h-[356px] object-cover z-50"
            alt=""
          />
        </animated.div>
      </div>
      <div className="relative hidden xl:flex xl:w-[60%] h-[100%] flex-col gap-5 md:justify-start md:items-start">

  <animated.div
    style={fadeDes}
    className="text-black text-lg font-raleway font-normal leading-[30px] xl:leading-10 flex flex-col gap-5"
  >
    <span className="md:text-2xl">I'm Chamaththa Shamod,</span> a passionate and driven software engineering intern with a keen interest in crafting innovative solutions to real-world problems. Throughout my academic journey and hands-on experiences, I've honed my skills in [list specific languages, tools, and technologies you're proficient in].
    {" "}
    During my internships and personal projects, I've had the opportunity to delve into diverse areas of software development, including [mention any relevant areas such as web development, mobile app development, database management, etc.]. My approach to problem-solving involves a blend of creativity, analytical thinking, and attention to detail, ensuring that the solutions I develop are not only robust but also user-friendly.
  
  </animated.div>
</div>

      </div>
    </animated.section>
  );
};
