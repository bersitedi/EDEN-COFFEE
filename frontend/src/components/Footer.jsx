import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/social.jpg";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start space-x-4 w-full py-6 px-4 shadow-cta shadow-md mb-1 mt-20">
        <div className="text-blue-500 flex text-2xl gap-x-4 cursor-pointer ml-3 mb-3">
          <Link to="#">
            <AiOutlineTwitter />
          </Link>
          <Link to="#">
            <FaFacebook />
          </Link>
          <Link to="#">
            <BsTelegram />
          </Link>
          <Link to="#">
            <AiFillInstagram />
          </Link>
        </div>
        <span className="flex flex-col">
          <p className="font-semibold text-blue-500">
            Follow us on social medias
            <span className="text-gray-500 text-sm ml-1">
              dolor sit amet consectetur adipiscing elit.
            </span>
          </p>
        </span>
      </div>
      <footer className="bg-cta dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="hidden md:block mt-6 md:mt-0">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  className="h-full w-full mr-10 rounded-lg"
                  alt="socail media"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:mt-10">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Flowbite
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Tailwind CSS
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline ">
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link to="#" className="hover:underline">
                ediz™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
