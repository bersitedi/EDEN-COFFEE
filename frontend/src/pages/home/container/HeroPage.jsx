import React from "react";
import coffee from "../../../assets/coffee1.jpg";

const HeroPage = () => {
  return (
    <>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url(${coffee})`,
          height: "500px",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.55)]">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                The best offer on the market <br />
                <span>for your business</span>
              </h1>
              <a
                href="#!"
                className="mb-2 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init="true"
                data-te-ripple-color="light"
                role="button"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-end scale-[2]">
          <svg
            viewBox="0 0 2160 48"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M 0 48 L 1080 48 L 2160 48 L 2160 0 L 1620 0 C 1080 40 540 4 540 0 L 0 0 L 0 48 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
