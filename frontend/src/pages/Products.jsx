import React, { useState } from "react";
import categories from "../data/categories";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdPin } from "react-icons/io";
import MainLayout from "../components/MainLayout";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [navIsVisible, setNavIsVisible] = useState(false);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  return (
    <MainLayout>
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
              className="w-6 h-6 text-white bg-yellow-600 rounded-full"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>

        <div
          className={`absolute inset-y-0 left-0 z-40 w-64 h-[400px] dark:bg-gray-800 transform ${
            navIsVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform md:hidden bg-yellow-900 rounded-md`}
        >
          <div className="h-full px-3 py-4">
            <ul className="space-y-2 font-medium mt-10">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-yellow-800 dark:hover:bg-gray-700 group ${
                      selectedCategory === category.id ? "text-blue-800" : ""
                    }`}
                  >
                    <span className="ms-3">{category.title}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="flex justify-center items-center border border-yellow-900"></button>
          </div>
        </div>

        <div className="hidden md:flex z-40 w-64 h-screen bg-yellow-900 rounded-md dark:bg-gray-800">
          <div className="h-full px-3 py-4 overflow-hidden">
            <ul className="space-y-2 font-medium mt-10">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-yellow-800 dark:hover:bg-gray-700 group ${
                      selectedCategory === category.id ? " bg-yellow-800" : ""
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
              ?.cards.map((card, index) => (
                <Link to={card.link} key={index}>
                  {" "}
                  {/* Wrap each card with Link component */}
                  <div className="p-4 border border-gray-200 rounded-lg shadow-md dark:border-gray-700">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-32 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
