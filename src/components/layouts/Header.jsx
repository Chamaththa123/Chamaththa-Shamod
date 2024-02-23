import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import logo from './../../assets/images/logo.webp'
import { headerItems } from '../../utils/dataArrays';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Header = ({ scrollRefs }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeNavigation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    config: {
      duration: 800,
      delay: 800,

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
    <animated.section ref={ref}  className=' fixed top-0 md:relative w-full  h-auto bg-white font-press-start flex flex-row items-center justify-between xl:justify-between p-0 xl:py-[5px] xl:px-[40px]'>
      <Link className='xl:w-[35%]' to="/">
        <animated.img style={fadeNavigation} src={logo} className=' w-[95px] h-[70px] md:h-auto md:w-[100px] md:py-2' alt="" />
      </Link>
      <animated.div style={fadeNavigation} className='hidden xl:flex w-[40%]  justify-around'>
        <div className="nav-item cursor-pointer text-center text-black text-lg font-semibold font-raleway">Home</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.aboutUs)} className="nav-item cursor-pointer text-center text-black text-lg font-semibold font-raleway">About Us</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.services)} className="nav-item cursor-pointer text-center text-black text-lg font-semibold font-raleway">Services</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.contact)} className="nav-item cursor-pointer text-center text-black text-lg font-semibold font-raleway">Contact Us</div>

      </animated.div>
<animated.div>
<button  className='font-raleway text-lg leading-6 border-[#004BE0] xl:inline-flex item-right border-2 rounded-lg w-fit p-8 py-[10px] font-semibold cursor-pointer bg-transparent text-[#004BE0] hover:bg-[#004BE0] hover:text-white transition-colors duration-300'>
      Let's Talk
    </button>
</animated.div>
      

      <div className=" bg-neutral-100 flex gap-3 items-center  xl:hidden px-[18px]  h-[70px]">
        <div className="text-black text-lg font-semibold">Menu</div>
        <span onClick={handleFadeIn}><GiHamburgerMenu className=' text-black text-[25px]' /></span>
      </div>


      <div className={`fixed w-full z-50 inset-0 top-0 left-0 bottom-0 bg-white h-[100vh] p-[20px] transition transform duration-500 ease-in-out fade-up-enter-active ${visibleMObile ? "fade-up-enter-to" : "fade-up-enter-from "
        } `} >
        <div className="flex items-center justify-between w-full">
          <Link className="">
            <img src={logo} className=" w-[150px]  " alt="" />
          </Link>
          <span onClick={handleFadeIn}  >
            <IoMdClose className=' text-[20px]' />
          </span>
        </div>
        {/* mobile header  */}
        
      </div>
    </animated.section>
  )
}
