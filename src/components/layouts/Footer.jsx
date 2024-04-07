import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import logo from './../../assets/images/logo2.png'
import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { footerServices, headerItems } from '../../utils/dataArrays';
import { Link, useNavigate } from "react-router-dom";

export const Footer = ({ scrollRefs}) => {

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,
    config: {
      duration: 800,
    },
  })

  useEffect(() => {
    const loaderDelay = 50;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);

  const navigate = useNavigate();
  const [visibleMObile, setVisibleMObile] = useState(false);

  const handleFadeIn = () => {
    setVisibleMObile((pre) => !pre);
    document.body.style.overflow = visibleMObile ? "visible" : "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [])

  const handleNavigateToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleNavigateToSectionMobile = (sectionRef) => {
    if (window.location.href.split("/").pop() !== "/") {

      navigate("/"); // Navigate to the home page if not already there

      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      handleFadeIn();
    }
  }

  return (
    <animated.section style={fadeScreen} className='overflow-hidden flex flex-col w-full h-auto' ref={ref}>
      <div className='flex items-start flex-col md:flex-row justify-between  gap-10 md:px-[5%] p-[40px] ' style={{backgroundImage: 'linear-gradient(to left bottom, #00adef,  #3871c1)'}}>
        <div className=' flex flex-col items-center md:items-start md:w-[30%]'>
          <img className="w-[30%] h-auto pb-10" src={logo} />
          <div className='flex flex-col gap-7 items-center md:items-start'>
            <div className="md:w-[70%] text-white text-base font-normal leading-normal text-center md:text-start">
            Passionate Software Engineer | Transforming Ideas into Code
            </div>
            {/* <div className="border-t-[1px] border-[#F9F9F9] w-[100%] md:w-[70%] hidden md:block  " /> */}
          </div>

        </div>
        <div className='flex flex-col md:flex-row md:items-start items-center gap-10 w-full md:w-[30%] md:px-[7%] justify-between'>
          <div className=' flex flex-col gap-7 '>
            <div className="text-center md:text-left text-white text-opacity-50 text-xl  uppercase leading-[50px]">Links</div>

            <div className=' flex flex-col items-center md:items-start  gap-7'>
              <div className="text-white text-base font-medium cursor-pointer ">Home</div>
              <div onClick={() => handleNavigateToSection(scrollRefs.aboutUs)} className="text-white text-base font-medium cursor-pointer ">About Us</div>
              <div onClick={() => handleNavigateToSection(scrollRefs.services)} className="text-white text-base font-medium cursor-pointer ">Services</div>
              <div onClick={() => handleNavigateToSection(scrollRefs.contact)} className="text-white text-base font-medium cursor-pointer ">Contact Us</div>
            </div>
          </div>
          {/* <div className='flex flex-col gap-7 '>
            <div className="text-center md:text-left text-white text-opacity-50 text-xl  uppercase leading-[50px]">Services</div>

            <div className='flex flex-col items-center md:items-start gap-6'>
              {footerServices.map((item, itemIndex) => {
                return (
                  <Link className="text-white text-base font-medium cursor-pointer " key={itemIndex}>
                    {item.title}
                  </Link>
                )
              })}
            </div>
          </div> */}
        </div>

        <div className='flex flex-col md:items-start items-center gap-4 md:gap-5 w-full md:w-[30%] md:px-[7%] justify-between'>
          <div className="text-center md:text-left text-white text-opacity-50 text-xl  uppercase leading-[50px]">Contact</div>

          <div className='flex tracking-[0.2px] text-base text-white'>
           070-3826675
          </div>

          <div className='flex tracking-[0.2px] text-base text-white'>
            shamodchamththa@gmail.com
          </div>
          {/* <div className='flex tracking-[0.1px] text-base text-white'>
            1/36 Major Street, <br /> Pinelands NT 0829.
          </div> */}
          <div className=' md:flex justify-between w-[100%] md:w-[40%] hidden md:gap-7'>
              <span className=' w-[30px] cursor-pointer'>
                <FaLinkedin className=' text-[30px] text-white' />
              </span>
              <span className=' w-[30px] cursor-pointer'>
                <FaInstagramSquare className=' text-[30px] text-white' />
              </span>
              <span className=' w-[30px] cursor-pointer'>
                <FaFacebook className=' text-[30px] text-white' />
              </span>
            </div>
        </div>
      </div>
      <div className="flex w-full bg-[#3062a8] md:text-sm md:leading-[20px] justify-center md:py-[0.8%]">
        <div className='text-white text-sm leading-[23px] flex flex-col md:flex-row gap-1 items-center'>
          <span>© 2024 - All Rights Reserved.</span>
          <span className="hidden md:block">|</span>

          <Link target="_blank" to="https://asipiya.lk//">
            Chamaththa Shamod
          </Link>
        </div>
      </div>


    </animated.section>
  )
}