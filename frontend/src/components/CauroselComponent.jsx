import React, { useState, useEffect } from "react";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [two, three, four, five];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, carouselImages.length]);

  return (
    <>
      <div className="relative w-full md:h-[400px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[hsla(0,0%,0%,0.55)]">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center  md:px-12">
              <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl text-gray-300">
                The best offer on the market <br />
                <span className="text-gray-400">for your business</span>
              </h1>
              <a
                href="/products"
                className="mb-2 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init="true"
                data-te-ripple-color="light"
                role="button"
              >
                Explore more
              </a>
            </div>
          </div>
        </div>
        <img
          className="w-full h-auto"
          src={carouselImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>
    </>
  );
};

export default CarouselComponent;
