import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import circle from "./../../assets/images/circle.png"
import sercar from "./../../assets/images/sercar.png"

export const Poster = ({ scrollRefs }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const prevDelay = 1000;

    const fadeScreen = useSpring({
        opacity: isVisible ? 1 : 0,

        config: {
            duration: 800,
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


    const fadeRight = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(20%)",
        config: {
            duration: 800,
            delay: prevDelay,
            easing: easings.easeInSine,
        },
    });

    useEffect(() => {
        const loaderDelay = 100;

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
        <animated.section style={fadeScreen} className='overflow-hidden  flex p-[30px] xl:pr-0 md:pb-[10%] xl:pb-[9%] py-[20px] bg-[#F3F3F3] xl:px-[8%] xl:py-[4%] flex-col gap-20  w-full h-auto relative' ref={ref}>
        	<animated.div className='absolute right-0 top-0' style={fadeRight}>
				<img
					src={circle}
					className=" xl:h-[100vh] h-[30vh] w-auto "
					alt=""
				/>

			</animated.div>
        	<animated.div className='absolute  hidden md:flex justify-end right-0 bottom-0' style={fadeRight}>
				<img
					src={sercar}
					className="xl:w-[97%] w-[68%] "
					alt=""
				/>
			</animated.div>
        	<animated.div className='absolute md:hidden -right-[10%] top-[16vh]' style={fadeRight}>
				<img
					src={sercar}
					className="  w-[352px]   "
					alt=""
				/>
			</animated.div>

            <animated.div style={fadeSubTitle} className="text-rose-500 text-base font-semibold md:hidden">
                Seamless Travel Starts Here
                </animated.div>
        
            <div className='w-full md:w-[65%] pt-[25vh] md:pt-0 flex flex-col pb-[60px] md:pb-0 gap-7 xl:gap-4 items-start'>
                <animated.div style={fadeSubTitle} className="text-center text-rose-500 text-2xl font-medium xl:leading-[60px] hidden md:block">Seamless Travel Starts Here </animated.div>
                <animated.div style={fadeTitle} className="text-black xl:text-5xl text-[28px] font-bold xl:leading-[70px] leading-[50px]">
                    Rent a Car for Ultimate Convenience.
                </animated.div>

                <animated.div style={fadeDes} className=" text-black text-lg md:w-[75%] font-normal leading-[30px] xl:leading-10 flex flex-col gap-5">
                    Experience hassle-free travel with our convenient car rental service. Whether it's a spontaneous road trip or a planned journey, we offer a fleet of reliable vehicles to suit your needs.
                </animated.div>

                <button  onClick={() => handleNavigateToSection(scrollRefs.contact)} className="rounded-[10px] border-2 border-black contact-button md:w-[150px] w-[180px]  text-black hover:bg-black hover:text-white   md:p-[10px] p-[10px] md:pl-[13px] md:pr-[13px] text-base font-medium  text-center  ">
                    Contact Us
                </button>
            </div>

        </animated.section>
    )
}
