import React, { useRef, useEffect, useState } from "react";

const WorkersComponent = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(leftRef.current);
    observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-5 py-10 lg:px-32 lg:pt-24 bg-gray-100">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div
          className={`w-full md:w-1/2 ${
            isVisible
              ? "transition-transform duration-1000 md:-translate-x-0"
              : "md:transform -translate-x-full"
          }`}
          ref={leftRef}
        >
          <div className="flex flex-wrap md:-m-2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-full p-1 md:p-4">
              <h1 className="h-full text-md text-gray-700">
                It all started with two coffee producer brothers, Assefa and
                Mulugeta Dukamo from the Bensa Sidama area.{" "}
                <span className=" text-blue-600 font-semibold">
                  Now Daye Bensa Coffee is one of the major coffee exporting
                  companies in Ethiopia
                </span>{" "}
                exporting green coffee directly from its own farms and farms of
                affiliated farmers. exporting green coffee directly from its own
                farms and farms of affiliated farmers.
              </h1>
            </div>
          </div>
        </div>
        <div
          className={`hidden md:block w-full md:w-1/2 ${
            isVisible
              ? "transition-transform duration-1000 md:translate-x-0"
              : "md:transform translate-x-full"
          }`}
          ref={rightRef}
        >
          <div className="flex flex-wrap md:-m-2">
            <div className="w-full p-1 md:p-4">
              <h1 className="h-full text-md text-gray-700">
                It all started with two coffee producer brothers,{" "}
                <span className=" text-blue-600 font-semibold">
                  Assefa and Mulugeta Dukamo
                </span>{" "}
                from the Bensa Sidama area. Now Daye Bensa Coffee is one of the
                major coffee exporting companies in Ethiopia exporting green
                coffee directly from its own farms and farms of affiliated
                farmers. affiliated farmers. exporting green coffee directly
                from its own farms and farms of affiliated farmers.
              </h1>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkersComponent;
