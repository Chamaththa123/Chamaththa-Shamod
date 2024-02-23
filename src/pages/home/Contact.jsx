import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import shape from './../../assets/images/contact.avif'
import ShapeCricle from './../../assets/images/ShapeCricle.png'
import line from './../../assets/images/line.png'
import { ContactForm } from './ContactForm'
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdAssistantNavigation } from "react-icons/md";
import { InlineWidget } from "react-calendly";

export const Contact = ({ scrollref }) => {
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
		const loaderDelay = 50;

		// Simulate loading delay with setTimeout
		setTimeout(() => {
			if (inView) {
				setIsVisible(true);
			}
		}, loaderDelay);
	}, [inView]);

    return (
		<animated.section className='overflow-hidden flex p-[30px] py-[60px] xl:px-[8%] xl:py-[4%] flex-col md:gap-20  w-full h-auto relative' style={fadeScreen} ref={ref}>

			<animated.div className='absolute right-[-35%] md:right-[5%] md:top-[-1%]'>
				<img
					src={shape}
					className="md:w-[450px] w-56 opacity-80 "
					alt=""
				/>
			</animated.div>
			<div className='absolute left-[-8%] hidden xl:block top-[40%] '>
				<img
					src={ShapeCricle}
					className="md:w-[215px] w-[78px] opacity-80 "
					alt=""
				/>
			</div>
			<div className=' md:w-[50%] flex flex-col gap-7 xl:gap-4 items-start'>
				<div ref={scrollref} />
				{/* <animated.div style={fadeSubTitle} className="text-center text-rose-500 text-2xl font-medium xl:leading-[60px]">GET IN TOUCH </animated.div> */}
				<animated.div style={fadeTitle} className="text-black xl:text-5xl text-3xl font-bold xl:leading-[70px] leading-[50px] md:mb-10">
				GET IN <span className="text-rose-500 "> TOUCH </span>
				</animated.div>
				<animated.div style={fadeSubTitle} className="text-left text-black text-xl font-medium xl:leading-[40px]">Thank you for taking the time to explore my portfolio. I'm always open to new opportunities, collaborations, and discussions. If you have any inquiries, feedback, or just want to connect, feel free to reach out to me.</animated.div>
			</div>
			<div>
			<animated.div style={fadeRight}>
       <InlineWidget url="https://calendly.com/shamodchamaththa/30min" styles={{overflow:'-moz-hidden-unscrollable',height:'850px'}}/>
    </animated.div>

			</div>
		</animated.section>
    //     <animated.section ref={ref} style={fadeScreen} className='overflow-hidden flex p-[30px] py-[60px] xl:px-[8%] xl:py-[4%] flex-col gap-20  w-full h-auto '>
    //         <div className=' w-full flex flex-col gap-7 xl:gap-4 items-start'>
    //         <div ref={scrollref} />
    //             <animated.div style={fadeSubTitle} className="text-center text-rose-500 text-2xl font-medium xl:leading-[60px]">Contact us  </animated.div>
    //             <animated.div style={fadeTitle} className="text-black w-full xl:text-5xl text-3xl font-bold xl:leading-[70px] leading-[50px] relative">
    //                 Join the Cool Conversation <br />  <span className='flex flex-col md:flex-row md:items-center gap-3'>   <span className='text-[#9C9C9C]'> <span className='text-black  md:hidden'>at</span> ST Auto Base</span> <span><img className=" w-auto h-[18px] mt-3" src={line} /></span></span>
    //             </animated.div>

    //             <animated.div className='w-full flex flex-col'>
    //                 {/* <ContactForm /> */}
	// 				<animated.div style={fadeRight}>
    //   <InlineWidget url="https://calendly.com/shamodchamaththa/30min" styles={{overflow:'-moz-hidden-unscrollable',height:'700px'}}/>
    // </animated.div>

    //                 {/* <animated.div className="md:w-[40%] bg-rose-500 rounded-[10px] flex flex-col gap-11  mt-5 md:mt-0 h-fit " style={fadeRight }>
    //                     <div className=' flex flex-col md:flex-row w-full md:gap-10 gap-2 items-center p-5 pl-10 bg-sky-950 rounded-tl-[10px] rounded-tr-[10px]'>
    //                         <span className="text-white text-lg font-bold  leading-[60px] tracking-wide">License Number</span>
    //                         <span className=" text-lg font-bold  leading-[60px] tracking-wide text-lime-400 ">LMVD 1062</span>
    //                     </div>
	// 					<div className="flex flex-col w-full p-10 pt-0 gap-6">
	// 					<div className=' flex flex-col md:flex-row w-full md:gap-10 gap-2 items-center '>
    //                         <span className='w-[46px] h-[46px] rounded-full border-2 border-white flex justify-center items-center'><BsTelephone className='text-white text-xl' /></span>
    //                         <span className="text-white text-lg font-bold  leading-[60px] tracking-wide">0435 908 921</span>
    //                     </div>
    //                     <div className=' flex flex-col md:flex-row w-full md:gap-10 gap-2 items-center'>
    //                         <span className='w-[46px] h-[46px] rounded-full border-2 border-white flex justify-center items-center'><FaRegEnvelopeOpen className='text-white text-xl' /></span>
    //                         <span className="text-white text-lg font-bold  leading-[60px] tracking-wide">stautobase829@gmail.com</span>
    //                     </div>
    //                     <div className=' flex flex-col md:flex-row w-full md:gap-10 gap-2 items-center'>
    //                         <span className='w-[46px] h-[46px] rounded-full border-2 border-white flex justify-center items-center'><MdAssistantNavigation  className='text-white text-xl' /></span>
    //                         <span className="text-white text-lg font-bold  tracking-wide">
    //                              1/36 Major Street, <br /> Pinelands NT 0829.
    //                         </span>
    //                     </div>
	// 					</div>
                       

    //                 </animated.div> */}
    //             </animated.div>



    //         </div>

    //     </animated.section>
    )
}
