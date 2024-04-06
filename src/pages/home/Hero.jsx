import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import hero from './../../assets/images/hero.webp'

import { Link } from 'react-router-dom';

export const Hero = ({ scrollRefs }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeTitle = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: 800,
      easing: easings.easeInSine,
    },
  });
  const fadeDes = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: 800,
      easing: easings.easeInSine,

    },
  });
  const fadeLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-40%)",
    config: {
      duration: 800,
      delay: 800,
      easing: easings.easeInSine,

    },
  });
  const fadeRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(20%)",
    config: {
      duration: 800,
      delay: 800,
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


  const handleNavigateToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
 
};
  return (
    <section className='overflow-hidden w-full xl:h-screen h-[80vh] relative flex items-center justify-center  font-press-start' ref={ref}>
      <div className=' hero-overlay bg-gradient-to-t from-[#110F1B] to-[#00000052]'></div>
      <img src={hero} className=' w-full xl:h-screen h-[80vh] object-cover' alt="" />
      <div className=' absolute  w-full xl:h-screen h-[80vh] flex items-center flex-col justify-center gap-[30px]'>
        <animated.div style={fadeTitle} className="text-white xl:text-[90px] text-center text-5xl xl:leading-[100px] leading-[60px]  font-bold pt-20 md:pt-0 ">
          Discover Drive
          <br />
          <span className="text-rose-500  ">Worthy </span>
          Deals
        </animated.div>
        <animated.div style={fadeDes} className="text-center text-white xl:text-3xl text-xl font-semibold leading-[45px]">
          Dive into Exceptional Deals<br />on Pre-Owned Cars!
          </animated.div>
        <animated.button style={fadeDes}  onClick={() => handleNavigateToSection(scrollRefs.contact)} to="/" className='px-[25px] py-[15px] md:px-[20px] md:py-[10px] rounded-[10px] border-2 border-theme-color hover:bg-theme-color  text-white xl:text-xl text-base font-semibold'>
          Let's Talk
        </animated.button>
      </div>
    </section>
  )
}