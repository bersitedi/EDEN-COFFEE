import React, { useState } from "react";
import categories from "../../../data/categories";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

const Sidebar = ({ displayAll }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [navIsVisible, setNavIsVisible] = useState(false);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start space-x-4 w-full py-3 px-4 mt-10 shadow-gray-400 shadow-md">
        <span className="flex items-center justify-center space-x-2">
          <IoMdPin />
          <p className="font-semibold text-blue-600">
            Welcome to Lorem ipsum,
            <span className="text-gray-600 text-sm ml-1">
              dolor sit amet consectetur adipiscing elit.
            </span>
          </p>
        </span>
      </div>
      <div className="relative mt-2 flex">
        <div className="md:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6 text-gray-700 bg-gray-100 rounded-full"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>

        <div
          className={`absolute inset-y-0 left-0 z-40 w-64 h-[400px] dark:bg-gray-800 transform ${
            navIsVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform md:hidden bg-gray-100 rounded-md`}
        >
          <div className="h-full px-3 py-4">
            <ul className="space-y-2 font-medium mt-10">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                      selectedCategory === category.id ? "bg-gray-300" : ""
                    }`}
                  >
                    <span className="ms-3">{category.title}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="flex justify-center items-center border border-gray-300"></button>
          </div>
        </div>

        <div className="hidden md:flex z-40 w-64 h-[430px] bg-gray-100 dark:bg-gray-800">
          <div className="h-full px-3 py-4 overflow-hidden">
            <ul className="space-y-2 font-medium mt-10">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`flex items-center p-2  rounded-lg font-bold dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                      selectedCategory === category.id ? " bg-gray-300" : ""
                    }`}
                  >
                    <span className="ms-3">{category.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories
              .find((category) => category.id === selectedCategory)
              ?.cards.slice(0, displayAll ? categories.length : 3)
              .map((card, index) => (
                <Link to={card.link} key={index}>
                  {" "}
                  {/* Wrap each card with Link component */}
                  <div className="p-4 border bg-white md:bg-gray-100 border-gray-200 rounded-lg shadow-md dark:border-gray-700">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-32 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {card.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
          {!displayAll && (
            <div className="mt-16 flex flex-col justify-center items-center">
              <Link
                to="/products"
                className="mx-auto flex items-center gap-x-2 font-bold bg-blue-500 text-white border-2 border-blue-500 px-6 py-1 rounded-lg hover:bg-white hover:text-blue-500"
              >
                <span>View all products</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
