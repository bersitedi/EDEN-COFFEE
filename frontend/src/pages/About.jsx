// About.js
import React from "react";
import MainLayout from "../components/MainLayout";
import three from "../assets/four.jpg";
import MeetOurTeamComponent from "../components/MeetOurTeamComponent";
import AwardsComponent from "../components/AwardsComponent";
import { Link } from "react-router-dom";
import SingleImageGallery from "../components/SingleImageGallery";
import WorkersComponent from "../components/WorkersComponent";
const About = () => {
  return (
    <MainLayout>
      <div className="relative">
        <h1 className="absolute top-0 left-0 text-gray-100 z-10 text-3xl mt-5 ml-5 font-bold">
          Learn More About Our Story
        </h1>
        <img src={three} alt="" className="w-full h-[100px] object-cover" />
      </div>
      <div className="mt-10 px-3 md:px-8">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet,{" "}
          <span className="text-lg font-bold text-blue-500">
            consectetur adipiscing
          </span>{" "}
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          <span className="text-lg font-bold text-blue-500">Lorem ipsum</span>{" "}
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="container mx-auto px-4 py-8 mt-10">
        <div className="w-full py-1 px-2 shadow-md mb-3">
          <h1 className="text-3xl font-bold mb-4">Our Coffee gallery</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <SingleImageGallery />
          </div>
          <div className="md:w-1/2 md:pl-8 md:-mt-20">
            <p className="text-md mb-4 pr-2">
              Welcome to{" "}
              <span className="font-semibold text-lg">Company Name</span>, your
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-md md:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            </p>

            <Link
              to="/project"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <WorkersComponent />
      <AwardsComponent />
      <MeetOurTeamComponent />
    </MainLayout>
  );
};

export default About;
