import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import shape from './../../assets/images/shape.png'
import ShapeCricle from './../../assets/images/ShapeCricle.png'

import { ServiceItem } from './ServiceItem'
import { servicesItems } from '../../utils/dataArrays'

export const Services = ({ scrollref }) => {

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
	

	const fadeLeft = useSpring({
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

			<animated.div style={fadeLeft} className='absolute right-[-35%] md:right-[5%] '>
				<img
					src={shape}
					className="md:w-[450px] w-56 opacity-80 "
					alt=""
				/>
			</animated.div>
			<div className='absolute left-[-8%] hidden xl:block top-[50%] '>
				<img
					src={ShapeCricle}
					className="md:w-[215px] w-[78px] opacity-80 "
					alt=""
				/>
			</div>
			<div className=' md:w-[50%] flex flex-col gap-7 xl:gap-4 items-start'>
				<div ref={scrollref} />
				<animated.div style={fadeSubTitle} className="text-center text-rose-500 text-2xl font-medium xl:leading-[60px]">Services </animated.div>
				<animated.div style={fadeTitle} className="text-black xl:text-5xl text-3xl font-bold xl:leading-[70px] leading-[50px]">
					Elevating Your Drive with Expertise and Care
				</animated.div>
			</div>
			<div className=' flex w-full flex-wrap justify-between pt-[60px] '>
				{servicesItems.map((item, itemIndex) => {
					return (
						<ServiceItem
							title={item.title}
							des={item.des}
							key={itemIndex}
						/>
					)
				})}

			</div>
		</animated.section>
	)
}
