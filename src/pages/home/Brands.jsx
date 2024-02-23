import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { brands } from '../../utils/dataArrays';


export const Brands = () => {

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

	const fadeUp = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? "translateY(0)" : "translateY(25px)",
		config: {
			duration: 800,
			delay: prevDelay,
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
	return (
		<animated.section ref={ref} style={fadeScreen} className='overflow-hidden flex bg-black flex-col w-full justify-center items-center py-[40px] gap-2 md:gap-5'>
			<animated.div style={fadeUp} className="text-center text-zinc-400 xl:text-5xl text-4xl font-bold">Our Brands</animated.div>
			<animated.div style={fadeUp} className=' flex md:w-[70%] w-full '>
				<Swiper
					slidesPerView={5}
					loop={true}
					autoplay={true}
					breakpoints={{
						768: {
							slidesPerView: 7,
						},
					}}

					modules={[Autoplay, EffectFade, Navigation, Pagination]}
					className="techSwiper "
				>
					{brands.slice(0, 14).map((item, itemIndex) => {
						return (
							<SwiperSlide key={itemIndex} className='flex items-center justify-center'>
								<img src={item.img} className='md:w-[76px] w-12' />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</animated.div>
		</animated.section>
	)
}
