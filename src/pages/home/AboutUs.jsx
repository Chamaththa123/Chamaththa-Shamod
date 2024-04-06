import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import abt from './../../assets/images/about.webp'
import circle from './../../assets/images/circle.svg'
export const AboutUs = ({ scrollref }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	const prevDelay = 200;

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
	const fadeDes = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? "translateY(0)" : "translateY(25px)",
		config: {
			duration: 800,
			delay: prevDelay + 200,
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
		<animated.section style={fadeScreen} ref={ref} className='overflow-hidden flex p-[30px] py-[60px] xl:px-[8%] xl:py-[4%] xl:flex-row flex-col gap-[10%] items-center w-full h-auto'>

			<div className=' xl:w-[50%] flex flex-col gap-7 xl:gap-4 items-start'>
				<div ref={scrollref} />
				<animated.div className="text-center text-rose-500 text-2xl font-medium xl:leading-[60px]" style={fadeSubTitle}>
					About us
				</animated.div>
				<animated.div className="text-black xl:text-5xl text-3xl font-bold xl:leading-[70px] leading-[50px]" style={fadeTitle}>
					Driven by Excellence, Defined by Service
				</animated.div>
				<animated.div className=' xl:hidden rounded-[10px] w-full h-auto  overflow-hidden' style={fadeSubTitle}>
					<img
						src={abt}
						className="w-[100%]  xl:h-auto object-cover "
						alt=""
					/>
				</animated.div>

				<animated.div style={fadeDes} className=" text-black text-lg font-normal leading-[30px] xl:leading-10 flex flex-col gap-5">
					<p> Welcome to ST Auto Base, your premier destination for automotive excellence.
						As a multifaceted automotive hub, we go beyond the traditional dealership experience,
						offering a comprehensive suite of services to meet all your vehicle needs. From meticulous
						mechanical repairs and log book services to expert panel beating, vehicle wrecking, and precision
						spray painting, our dedicated team ensures that your vehicle receives the care it deserves.
					</p>
					<p>
						At ST Auto Base, our commitment extends beyond sales - it's about building lasting relationships with our customers. We pride ourselves on transparency, providing free quotes for all our services. With a passion for quality and a customer-centric approach, we are your trusted partner for everything automotive.
						Experience the ST Auto Base difference, where your satisfaction is our driving force.
					</p>
				</animated.div>

			</div>
			<div className='relative hidden xl:flex xl:w-[45%] h-[100%]  flex-col gap-5  items-center justify-center '>
				<animated.div style={fadeLeft} className=' rounded-[10px] max-w-[520px] xl:max-h-[680px]  overflow-hidden'>
					<div className=' absolute top-[-100px] left-[-110px] -z-10'>

						<img
							src={circle}
							className="w-[100%] "
							alt=""
						/>
					</div>
					<img
						src={abt}
						className="w-[100%]  xl:h-auto h-[356px] object-cover z-50"
						alt=""
					/>
				</animated.div>
			</div>
		</animated.section>
	)
}
