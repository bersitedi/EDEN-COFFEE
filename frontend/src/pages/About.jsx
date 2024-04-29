// About.js
import React from "react";
import MainLayout from "../components/MainLayout";
import CarouselComponent from "../components/CauroselComponent";
import three from "../assets/three.jpg";
import MeetOurTeamComponent from "../components/MeetOurTeamComponent";
const About = () => {
  return (
    <MainLayout>
      <CarouselComponent />
      <div className="mt-10 bg-gray-50 shadow-md border-2 border-gray-100 py-5 px-10">
        <p className="text-gray-600">
          <span className="text-2xl font-bold mr-2 text-blue-500">
            Our mission is simple yet profound:
          </span>
          to connect coffee lovers with exceptional coffee experiences. We
          strive to source the highest quality coffee beans from renowned
          coffee-growing regions and deliver them to coffee enthusiasts
          worldwide.
        </p>
      </div>
      <div className="relative bg-white overflow-hidden mt-20 border-2 border-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20  lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <div className="w-full py-2 px-2 shadow-md mb-3">
                  <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                    About us
                  </h2>
                </div>

                <p>
                  Donec porttitor, enim ut dapibus lobortis, lectus sem
                  tincidunt dui, eget ornare lectus ex non libero. Nam rhoncus
                  diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel
                  viverra lorem volutpat sodales. In ornare porttitor odio sit
                  amet laoreet. Sed laoreet, nulla a posuere ultrices, purus
                  nulla tristique turpis, hendrerit rutrum augue quam ut est.
                  Fusce malesuada posuere libero, vitae dapibus eros facilisis
                  euismod. Sed sed lobortis justo, ut tincidunt velit. Mauris in
                  maximus eros.
                </p>
              </div>
              <div className="flex gap-3 mt-5">
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
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={three}
            alt=""
          />
        </div>
      </div>
      <MeetOurTeamComponent />
    </MainLayout>
  );
};

export default About;
