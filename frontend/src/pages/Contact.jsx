import React from "react";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import MainLayout from "../components/MainLayout";
import three from "../assets/three.jpg";

const Contact = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 mt-5">
        <div className="w-full py-1 px-2 shadow-md mb-3">
          <h1 className="text-3xl font-bold mb-4 text-gray-700">Contact Us</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center border-2 border-gray-100 shadow-lg ">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src={three} alt="Company" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8 mb-10 mt-5 space-y-3">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">
              Contact Information
            </h2>

            <div className="flex items-center">
              <FaEnvelope className="w-6 h-6 mr-3 text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-700">example@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="w-6 h-6 mr-3 text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-700">+1234567890</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapPin className="w-6 h-6 mr-3 text-blue-500" />
              <h3 className="text-xl font-semibold">location of the company</h3>
            </div>
            <div className="flex items-center space-x-4  ml-10">
              <FiTwitter className="w-6 h-6 text-white bg-blue-500  hover:cursor-pointer" />
              <FiFacebook className="w-6 h-6 text-white bg-blue-500 hover:cursor-pointer" />
              <FiInstagram className="w-6 h-6 text-white bg-blue-500 hover:cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-16 bg-gray-50 shadow-md border-2 border-gray-100 py-2 px-4">
          <p className="text-gray-600">
            Our mission is simple yet profound: to connect coffee lovers with
            exceptional coffee experiences. We strive to source the highest
            quality coffee beans from renowned coffee-growing regions and
            deliver them to coffee enthusiasts worldwide.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
