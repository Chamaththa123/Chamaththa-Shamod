import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import { InlineWidget } from "react-calendly";
import line from './../../assets/images/line.png'
import { ContactForm } from './ContactForm'
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdAssistantNavigation } from "react-icons/md";

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
        <animated.section ref={ref} style={fadeScreen} className='overflow-hidden flex p-[30px] py-[60px] xl:px-[8%] xl:py-[4%] flex-col gap-20  w-full h-auto '>
            <div className=' w-full flex flex-col gap-7 xl:gap-4 items-start'>
            <div ref={scrollref} />
                <animated.div className="text-center text-[#40b93c] text-4xl font-medium xl:leading-[60px]">Contact </animated.div>
                <animated.div style={fadeTitle} className="text-black w-full xl:text-5xl text-3xl font-bold xl:leading-[70px] leading-[50px] relative">
				GET IN TOUCH 
                </animated.div>

				<animated.div style={fadeTitle} className="text-black w-full xl:text-lg text-[18px] md:w-[60%] font-normal xl:leading-[30px] leading-[30px] relative">
				Thank you for taking the time to explore my portfolio. I'm always open to new opportunities, collaborations, and discussions. If you have any inquiries, feedback, or just want to connect, feel free to reach out to me.
                </animated.div>

                <div className='w-full flex flex-col md:flex-row justify-between md:mt-8'>
				<animated.div style={fadeRight} className='md:w-[50%] w-full'>
       <InlineWidget url="https://calendly.com/shamodchamaththa/30min" styles={{overflow:'-moz-hidden-unscrollable',height:'870px'}}/>
    </animated.div>


                    <div className="flex flex-col md:items-center">ebeberegregerg</div>
                </div>
				


            </div>

        </animated.section>
    )
}
