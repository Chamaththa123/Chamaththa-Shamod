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

			<div>
				
			</div>
			<animated.div style={fadeRight}>
       <InlineWidget url="https://calendly.com/shamodchamaththa/30min" styles={{overflow:'-moz-hidden-unscrollable',height:'850px'}}/>
    </animated.div>
			</div>
		</animated.section>
    //     
    )
}
