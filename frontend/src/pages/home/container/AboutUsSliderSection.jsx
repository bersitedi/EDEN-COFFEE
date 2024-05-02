import React, { useEffect, useRef, useState } from "react";
import coffee from "../../../assets/coffeefarm.jpg";
import { useSpring, animated } from "react-spring";
import { IoMdPin } from "react-icons/io";

const AboutUsSliderSection = () => {
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const [firstDivAnimation, setFirstDivAnimation] = useSpring(() => ({
    transform: "translateX(-100px)",
    opacity: 0,
    config: { duration: 250 },
  }));

  const [secondDivAnimation, setSecondDivAnimation] = useSpring(() => ({
    transform: "translateX(100px)",
    opacity: 0,
    config: { duration: 250 },
  }));

  const isElementInViewport = (ref) => {
    const rect = ref.current.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollThreshold = 100;
    const isFastScrolling =
      Math.abs(window.scrollY - scrollY) > scrollThreshold;

    if (isElementInViewport(firstDivRef)) {
      setFirstDivAnimation({ transform: "translateX(0)", opacity: 1 });
      if (isFastScrolling) {
        setTimeout(() => {
          setSecondDivAnimation({ transform: "translateX(0)", opacity: 1 });
        }, 300);
      }
    }

    if (isElementInViewport(secondDivRef) && !isFastScrolling) {
      setSecondDivAnimation({ transform: "translateX(0)", opacity: 1 });
    }
  }, [scrollY]);

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col justify-start items-start space-x-4 w-full py-3 px-4 shadow-gray-400 shadow-md">
        <span className="flex items-center justify-center space-x-2">
          <IoMdPin />
          <p className="font-semibold text-blue-600">
            Welcome to Lorem ipsum,
            <span className="text-gray-600 text-sm ml-1">
              dolor sit amet consectetur adipiscing elit.
            </span>
          </p>
        </span>
      </div>
      <div
        ref={firstDivRef}
        className="flex flex-col lg:flex-row items-center lg:justify-between gap-5 py-5 lg:mb-8 px-4"
      >
        <animated.div
          style={firstDivAnimation}
          className="mt-5 lg:mt-0 lg:w-1/2"
        >
          <img
            src={coffee}
            className="mx-auto lg:mx-0 w-full lg:w-auto max-h-[300px] rounded-md"
            alt="Coffee"
          />
        </animated.div>
        <animated.div style={firstDivAnimation} className="lg:w-1/2">
          <div className="flex flex-col gap-y-3 lg:ml-3">
            <h2 className="text-blue-500 font-bold text-2xl">
              Washing stations
            </h2>
            <p className="text-gray-600 font-semibold text-sm">
              ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus
              velit. Fusce facilisis risus et felis venenatis, id fermentum
              justo fringilla.
            </p>
            <button
              type="button"
              className="text-blue-500 flex items-start justify-start hover:text-blue-300 lg:px-4 lg:py-2 lg:w-[200px] lg:bg-blue-500 lg:text-gray-300 lg:rounded-lg lg:hover:bg-blue-500 lg:hover:text-white"
            >
              Learn more
            </button>
          </div>
        </animated.div>
      </div>

      <div
        ref={secondDivRef}
        className="flex flex-col lg:flex-row items-center lg:justify-between gap-5 py-5 px-4"
      >
        <animated.div style={secondDivAnimation} className="lg:w-1/2">
          <div className="flex flex-col gap-y-3  lg:ml-3">
            <h2 className="text-blue-500 font-bold text-2xl">Member Farmers</h2>
            <p className="text-gray-600 font-semibold text-sm">
              ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus
              velit. Fusce facilisis risus et felis venenatis.
            </p>
            <button
              type="button"
              className="text-blue-500 flex items-start justify-start hover:text-blue-300 lg:px-4 lg:py-2 lg:w-[200px] lg:bg-blue-500 lg:text-gray-300 lg:rounded-lg lg:hover:bg-blue-500 lg:hover:text-white"
            >
              Learn more
            </button>
          </div>
        </animated.div>
        <animated.div
          style={secondDivAnimation}
          className="mt-5 lg:mt-0 lg:w-1/2"
        >
          <img
            src={coffee}
            className="mx-auto lg:mx-0 w-full lg:w-auto max-h-[300px] rounded-md"
            alt="Coffee"
          />
        </animated.div>
      </div>
    </section>
  );
};

export default AboutUsSliderSection;
