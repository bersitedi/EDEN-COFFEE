import React, { useState, useEffect } from "react";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [two, three, four, five]; // Use the imported variables directly

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
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[hsla(0,0%,0%,0.55)]">
          <h2 className="text-white text-5xl font-bold">About Us</h2>
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
