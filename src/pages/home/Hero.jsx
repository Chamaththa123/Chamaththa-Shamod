import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import hero from './../../assets/images/Frame65.png'
import hero2 from './../../assets/images/user.png'
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
    <div className='absolute top-0 left-0 w-full z-50 bg-[#0c2051]'></div>
    {/* <div className=' hero-overlay'></div> */}
    <img src={hero} className=' w-full xl:h-screen h-[80vh] object-cover' alt="" />
    <div className=' absolute  w-full xl:h-screen h-[80vh] md:px-[6%] flex flex-col justify-center'>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[60%]">
          <animated.div style={fadeTitle} className="text-white font-raleway xl:text-[70px] text-left text-5xl xl:leading-[100px] leading-[20px] font-semibold">
            <span className="md:text-3xl">Hi,</span>
            <span className="md:text-3xl">I am</span>
          </animated.div>
          <animated.div style={fadeTitle} className="text-white font-raleway xl:text-[65px] text-5xl xl:leading-[100px] leading-[60px] font-semibold">
            Chamaththa
            Shamod
          </animated.div>
          <animated.div style={fadeDes} className="text-white font-raleway xl:text-2xl text-xl font-medium leading-[5px]">
            Passionate Software Engineer | Transforming Ideas into Code
          </animated.div>
          <animated.div style={fadeDes} className="text-white font-raleway xl:text-lg text-xl font-medium md:my-[7%] leading-[5px] md:w-[80%]">
            Welcome to my portfolio showcasing a journey fueled by passion, dedication, and a relentless drive for learning and growth.
          </animated.div>
          <div className='flex gap-[20px] md:mt-[5%]'>
            <Link to="/contact" className='px-[20px] py-[10px] rounded-[10px] border-2 border-orange-500 hover:bg-orange-500 text-white xl:text-xl text-base font-semibold'>
              Download CV
            </Link>
          </div>
        </div>
        <div className="md:w-[40%] flex justify-end">
  <animated.div className="rounded-[10px] w-[90%] h-auto overflow-hidden" style={fadeRight}>
    <img src={hero2} className="w-[100%] xl:h-auto object-cover" alt="" />
  </animated.div>
</div>


      </div>
    </div>
  </section>
  )
}