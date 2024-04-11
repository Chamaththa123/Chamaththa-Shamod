import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import { InlineWidget } from "react-calendly";
import line from "./../../assets/images/line.png";
import { ContactForm } from "./ContactForm";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdAssistantNavigation } from "react-icons/md";
import email from "../../assets/images/email.gif";
import call from "../../assets/images/call.gif";

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
    <animated.section
      ref={ref}
      style={fadeScreen}
      className="overflow-hidden flex p-[30px] py-[60px] xl:px-[5%] xl:py-[4%] flex-col gap-20  w-full h-auto "
    >
      <div className=" w-full flex flex-col gap-7 xl:gap-4 items-start">
        <div ref={scrollref} />
        <animated.div className="text-center text-[#046fbb] text-4xl font-medium xl:leading-[60px]">
          Contact{" "}
        </animated.div>
        <animated.div
          style={fadeTitle}
          className="text-[#051B5A] w-full xl:text-5xl text-3xl font-bold xl:leading-[70px] leading-[50px] relative"
        >
          GET IN TOUCH
        </animated.div>

        <animated.div
          style={fadeTitle}
          className="text-[#051B5A] w-full xl:text-lg text-[18px] md:w-[60%] font-normal xl:leading-[25px] leading-[30px] relative"
        >
          Thank you for taking the time to explore my portfolio. I'm always open
          to new opportunities, collaborations, and discussions. If you have any
          inquiries, feedback, or just want to connect, feel free to reach out
          to me.
        </animated.div>

        <div className="w-full flex flex-col md:flex-row  md:mt-8">
          <animated.div style={fadeRight} className="md:w-[50%] w-full">
            <InlineWidget
              url="https://calendly.com/shamodchamaththa/30min"
              styles={{ overflow: "-moz-hidden-unscrollable", height: "870px" }}
            />
          </animated.div>

          <div className="flex flex-col md:ml-[13%]">
            <div>
              <div className=" flex md:flex-row flex-col md:mb-4">
                <span>
                  <img src={email} alt="email" className="w-14" />
                </span>{" "}
                <span className="md:mt-4 md:ml-4 text-lg">shamodchamaththa@gmail.com</span>
              </div>
              <div className=" flex md:flex-row flex-col mb-4 ">
                <span>
                  <img src={call} alt="email" className="w-14" />
                </span>{" "}
                <span className="md:mt-4 md:ml-4 text-lg">070 3826 675 / 074 1308 202</span>
              </div>
            </div>
            <div className=" flex flex-row  gap-10 ">
              <div>
                <button>
                  <svg
                    viewBox="0 0 16 16"
                    class="bi bi-twitter"
                    fill="currentColor"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                  </svg>
                  <span>Twitter</span>
                </button>
              </div>

              <div>
                <button>
                  <svg
                    viewBox="0 0 16 16"
                    class="bi bi-twitter"
                    fill="currentColor"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                  </svg>
                  <span>Twitter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};
