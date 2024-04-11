import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import logo2 from "./../../assets/images/logo2.png";
import { Link } from 'react-router-dom';

export const Hero = ({ scrollRefs }) => {
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
      className="overflow-hidden flex p-[30px] pt-[100px] xl:px-[0%] xl:pt-[4%] xl:flex-row bg-[#F1F5FF] flex-col gap-[0%] items-center w-full h-auto"
    >
      <div className=" xl:w-[50%] flex flex-col gap-1 xl:gap-10 items-start xl:pl-[5%]">
        <div />

        <animated.div
          className=" xl:hidden rounded-[10px] w-full h-auto  overflow-hidden"
          style={fadeSubTitle}
        >
          <img
            src={logo2}
            className="w-[100%]  xl:h-auto object-cover "
            alt=""
          />
        </animated.div>
        <animated.div
          className="text-[#051B5A] xl:text-[26px] text-[20px] font-semibold xl:leading-[20px] leading-[50px]"
          style={fadeTitle}
        >
          Hi,I am
        </animated.div>
        <animated.div
        className="text-[#051B5A] xl:text-[58px] text-[40px] font-bold xl:leading-[50px] leading-[45px]"
          style={fadeTitle}
        >
          Chamaththa Shamod
        </animated.div>
        <animated.div
          className="text-[#051B5A] xl:text-[20px] text-[20px] md:font-semibold font-medium xl:leading-[10px] leading-[28px] xl:w-full w-[100%]"
          style={fadeTitle}
        >
          Passionate Software Engineer | Transforming Ideas into Code
        </animated.div>

        <animated.div
          style={fadeDes}
          className=" text-[#051B5A] xl:text-lg text-[18px] font-normal md:mt-0 mt-7 leading-[25px] xl:leading-0 flex flex-col "
        >
          <p>
            Welcome to my portfolio showcasing a journey fueled by passion,
            dedication, and a relentless drive for learning and growth.
          </p>
        </animated.div>
        <div className='flex gap-[20px] md:mt-[5%] mt-10'>
      <Link to="/contact" 
            className='fancy'> 
            <span class="top-key"></span>
            <span class="text">Download CV</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
      </Link>
    </div>
      </div>
      <div className="relative hidden xl:flex xl:w-[50%] h-[100%] pt-10 flex-col gap-5  items-center justify-center ">
        <animated.div
          style={fadeLeft}
          className=" rounded-[10px] max-w-[520px] xl:max-h-[680px]  overflow-hidden"
        >
          <div className=" absolute top-[100px] left-[-110px] -z-10"></div>
          <img
            src={logo2}
            className="w-[100%]  xl:h-auto h-[356px] object-cover z-50"
            alt=""
          />
        </animated.div>
      </div>
    </animated.section>
  );
};
