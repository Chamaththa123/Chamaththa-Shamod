import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import hero from './../../assets/images/hero.webp'
import hero2 from './../../assets/images/logo.webp'
// import hero from './../../assets/images/hero.jpeg'

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
      <div className=' hero-overlay bg-gradient-to-t from-[#004be06e] to-[#004be015]'></div>
      <img src={hero} className=' w-full xl:h-[100vh] h-[80vh] object-cover' alt="" />
      <div className=' absolute  w-full xl:h-screen h-[80vh] md:px-[6%] flex items-left flex-col justify-center'>
      <animated.div style={fadeTitle} className="text-white font-raleway xl:text-[70px] text-left text-5xl xl:leading-[100px] leading-[20px]  font-semibold  ">
      <span className="md:text-3xl "> Hi, </span>
          <span className="md:text-3xl"> I am </span>
        </animated.div>
        <animated.div style={fadeTitle} className="text-white font-raleway xl:text-[65px]  text-5xl xl:leading-[100px] leading-[60px]  font-semibold  ">
        Chamaththa
          Shamod
        </animated.div>
        <animated.div style={fadeDes} className=" text-white font-raleway xl:text-3xl text-xl font-medium leading-[5px]">
        Passionate Software Engineer | <br></br>Transforming Ideas into Code
          </animated.div>
          
        <animated.button style={fadeDes}  onClick={() => handleNavigateToSection(scrollRefs.contact)} to="/" className='px-[25px] py-[15px] font-raleway md:px-[20px] md:py-[10px] rounded-[10px] border-2 border-[#F14902] hover:bg-[#bd6742b6]  text-white xl:text-lg text-base font-semibold md:mt-20 mt-10 w-[15%]'>
          My Resume
        </animated.button>
      </div>
    </section>
  )
}