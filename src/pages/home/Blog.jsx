import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { blogItem } from '../../utils/dataArrays';

export const Blog = ({ scrollref }) => {

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
    <animated.section className='overflow-hidden flex p-[30px] py-[60px] xl:px-[5%] xl:py-[4%] flex-col md:gap-20  w-full h-auto relative' style={fadeScreen} ref={ref}>

<animated.div className="text-left text-[#046fbb] text-4xl font-medium ">
          My Tech Articles{" "}
        </animated.div>

        <animated.div style={fadeLeft} className=' flex md:w-[100%] w-full justify-center items-center'>
				<Swiper
					slidesPerView={5}
					loop={true}
					autoplay={true}
					breakpoints={{
						768: {
							slidesPerView: 3,
						},
					}}

					modules={[Autoplay, EffectFade, Navigation, Pagination]}
					className="techSwiper "
				>
					{blogItem.slice(0, 5).map((item, itemIndex) => {
						return (
							<SwiperSlide key={itemIndex} className='flex items-center justify-center'>
    <div className="w-[90%] bg-white rounded-lg shadow-lg">
        <img src={item.img} className='w-[100%] h-[200px]  mb-1 rounded-lg' alt={item.name} />
        <div className="p-2">
        <p className="text-left font-semibold mb-3 text-[#051B5A]">{item.title}</p>
        <a className="p-1 px-2 bg-[#051B5A] text-white text-sm rounded-sm ">Read More</a>
        </div>
    </div>
</SwiperSlide>

						);
					})}
				</Swiper>
			</animated.div>
		</animated.section>
  )
}
