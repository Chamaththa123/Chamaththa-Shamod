import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import gallery from './../../assets/images/gallery/gallery-4.jpg'
import { galleryItem } from '../../utils/dataArrays'

export const Gallery = () => {

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
        <animated.section className='overflow-hidden flex p-[30px] py-[60px] bg-[#F3F3F3] xl:px-[8%] xl:py-[4%] flex-col gap-20  w-full h-auto relative' ref={ref}>
            <div className='w-full md:w-[75%] flex flex-col gap-7 xl:gap-4 items-start'>
                <animated.div style={fadeSubTitle} className="text-center text-rose-500 text-2xl font-medium xl:leading-[60px]">Gallery  </animated.div>
                <animated.div style={fadeTitle} className="text-black xl:text-5xl text-3xl font-bold xl:leading-[70px] leading-[50px]">
                    Experience automotive excellence in our gallery at ST Auto Base
                </animated.div>
            </div>
            <div className=' flex w-full flex-wrap justify-between '>
                {galleryItem.map((gallery, gIndex) => {
                    return (
                        <GalleryCard index={gIndex} img={gallery.img} />
                    )
                })}
            </div>
        </animated.section>
    )
}

const GalleryCard = ({ index, img }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });


    const prevDelay = 1000;
    const [isVisible, setIsVisible] = useState(false);
    const fadeDes = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(25px)",
        config: {
            duration: 800,
            delay: prevDelay + 200,
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
        <animated.div style={fadeDes} key={index} className='flex flex-col md:w-[48%] w-full mb-10 gap-5 rounded-[10px] overflow-hidden aspect-square' ref={ref}>
            <img
                src={img}
                className="w-full h-full object-cover z-50"
                alt=""
            />
        </animated.div>
    )
}
