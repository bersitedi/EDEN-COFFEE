import React, { useRef, useEffect, useState } from "react";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import six from "../assets/coffee1.jpg";

const SingleImageGallery = () => {
  const galleryRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasEntered) {
          setHasEntered(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, [hasEntered]);

  return (
    <div
      className={`grid gap-4 ${
        hasEntered
          ? "opacity-100 transition-opacity ease-in duration-1000 transform translate-y-0"
          : "opacity-0 -translate-y-10"
      }`}
      ref={galleryRef}
    >
      <div>
        <img className="h-auto max-w-full rounded-lg" src={four} alt="" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={five} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={three} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={two} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={one} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={six} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleImageGallery;
