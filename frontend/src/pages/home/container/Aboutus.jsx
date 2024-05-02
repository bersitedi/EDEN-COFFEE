import React, { useRef, useState } from "react";
import { IoMdPin } from "react-icons/io";
import { useSpring, animated } from "react-spring";
import coffee from "../../../assets/three.jpg";

const Aboutus = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [springProps, setSpringProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(50px)",
    config: { duration: 1000 }, // Adjust the duration as needed (in milliseconds)
  }));

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (!hasAnimated && entry.isIntersecting) {
      setSpringProps({ opacity: 1, transform: "translateY(0)" });
      setHasAnimated(true); // Set the flag to true once the animation has been triggered
    }
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  React.useEffect(() => {
    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return (
    <animated.div style={springProps} ref={sectionRef}>
      <div className="container mx-auto px-4 py-5 lg:mt-20">
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
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-5 py-5">
          <div className="lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl font-bold mb-3">
              Assume this is the title
            </h1>
            <p className="text-md leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Contact us
              </button>
              <button
                type="button"
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-1/2">
            <img
              src={coffee}
              className="mx-auto lg:mx-0 w-full lg:w-auto rounded-md"
              alt="Coffee"
            />
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Aboutus;
