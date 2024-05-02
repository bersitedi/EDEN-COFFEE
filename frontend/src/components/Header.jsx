import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const [navItems, setNavItems] = useState([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ]);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} alt="logo" className="h-9" />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white text-dark-light">
            EDIZ
          </span>
        </Link>
        <div className="md:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] md:mt-0 bg-gray-100 md:bg-gray-50 z-[49] flex flex-col w-full md:w-auto justify-center md:justify-end md:flex-row fixed top-0 bottom-0 md:static gap-x-9 items-center overflow-hidden`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  ${
                    location.pathname === item.href
                      ? "text-blue-500 md:bg-transparent dark:text-blue-300 dark:bg-transparent"
                      : "text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
