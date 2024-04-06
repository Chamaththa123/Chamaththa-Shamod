import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import logo from './../../assets/images/logo.png'
import menu from './../../assets/images/menu.png'
// import { HeaderLink } from '../HeaderLink';
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
    <animated.section
      ref={ref}
      style={fadeNavigation}
      className='fixed w-full inset-0 top-0 left-0 bottom-0 z-50  h-[92px] bg-white font-press-start flex items-center justify-between p-[15px] mb-40px xl:py-[10px] xl:px-[40px] shadow-sm'>
      <Link to="/">
        <img src={logo} className='w-[120px] md:w-[150px]' alt="" />
      </Link>
      <div className='hidden xl:flex w-[40%]  justify-around'>
      <div className="nav-item cursor-pointer text-center text-black text-lg font-medium">Home</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.aboutUs)} className="nav-item cursor-pointer text-center text-black text-lg font-medium">About Us</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.services)} className="nav-item cursor-pointer text-center text-black text-lg font-medium">Services</div>
        <div onClick={() => handleNavigateToSection(scrollRefs.contact)} className="nav-item cursor-pointer text-center text-black text-lg font-medium">Contact Us</div>
      </div>
      <Link to="/schedule" className='md:hidden inline-flex px-4 py-2 bg-red-600 justify-center items-center  text-white text-md font-bold hover:bg-gradient-to-r hover:from-[#23216E] hover:via-[#830862] hover:to-red-400 '>
        Schedule a call
      </Link>
      <span className='xl:hidden' onClick={handleFadeIn}>
        <img src={menu} className=" w-[37px] border-4 border-[#F5F5F5] bg-[#F5F5F5] rounded-md bg-[F5F5F5]" alt="" />
        </span>
      {/* <Link to="/schedule" className='hidden xl:inline-flex px-10 py-3 bg-[#f68712] rounded-lg justify-center items-center gap-2.5  text-white text-lg font-bold hover:bg-gradient-to-r hover:from-[#3632a8] hover:via-[#3871c1] hover:to-[#00adef] '>
        Let's Talk
      </Link> */}
      <div className={`fixed w-full inset-0 top-0 left-0 bottom-0 bg-white h-[100vh] p-[20px] transition transform duration-500 ease-in-out fade-up-enter-active ${visibleMObile ? "fade-up-enter-to" : "fade-up-enter-from "
        } `} >
        <div className="flex items-center justify-between w-full">
          <Link className="">
            <img src={logo} className=" w-[150px]" alt="" />
          </Link>
      
          <span onClick={handleFadeIn}>
            <IoMdClose className='text-[20px]' />
          </span>
        </div>
        {/* mobile header  */}
        <div className="w-full flex mt-[80px] flex-col gap-3">
        <div className="nav-item cursor-pointer text-left text-black text-lg font-medium">Home</div>
        <div onClick={() => handleNavigateToSectionMobile(scrollRefs.aboutUs)} className="nav-item cursor-pointer text-left text-black text-lg font-medium">About Us</div>
        <div onClick={() => handleNavigateToSectionMobile(scrollRefs.services)} className="nav-item cursor-pointer text-left text-black text-lg font-medium">Services</div>
        <div onClick={() => handleNavigateToSectionMobile(scrollRefs.contact)} className="nav-item cursor-pointer text-left text-black text-lg font-medium">Contact Us</div>
        </div>
      </div>
    </animated.section>
  )
}
