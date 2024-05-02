import React, { useState } from "react";
import categories from "../data/categories";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import coffee from "../assets/four.jpg";
import farm from "../assets/coffeefam.jpg";
import { FaIndustry } from "react-icons/fa";

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
      <div className="relative mb-8">
        <h1 className="absolute top-0 left-0 text-gray-200 z-10 text-3xl lg:text-4xl mt-5 ml-3 font-bold">
          Our Coffee
        </h1>
        <img src={coffee} alt="" className="w-full h-[100px] object-cover" />
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
          className={`absolute inset-y-0 left-0 z-40 w-64 h-[400px]  transform ${
            navIsVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform md:hidden bg-gray-100 rounded-md`}
        >
          <div className="h-full px-3 py-4">
            <ul className="space-y-2 font-medium mt-10">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`flex items-center p-2 text-gray-700 rounded-lg dark:text-white hover:bg-gray-300  group ${
                      selectedCategory === category.id ? "text-blue-500" : ""
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

        <div className="hidden md:flex z-40 w-64 h-screen bg-gray-50 rounded-md ">
          <div className="h-full px-3 py-4 overflow-hidden">
            <ul className="space-y-2 font-medium mt-10">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`flex items-center p-2 text-gray-700 rounded-lg dark:text-white hover:bg-gray-300  group ${
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
              ?.cards.map((card, index) => (
                <Link to={card.link} key={index}>
                  {" "}
                  {/* Wrap each card with Link component */}
                  <div className="p-4 border bg-white lg:bg-gray-50 border-gray-200 rounded-lg shadow-md ">
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
      <div className="relative mt-8">
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-[hsla(0,0%,0%,0.55)] px-4 lg:px-32">
          <h1 className="text-3xl lg:text-4xl text-gray-200 font-bold">
            Our farm
          </h1>
          <p className="text-sm md:text-md font-semibold text-gray-200 mt-5">
            Our farm is located in Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed eget risus velit. Fusce facilisis risus et
            felis venenatis, id fermentum justo fringilla. Integer sit amet nunc
            eget justo egestas placerat nec eget nisi. adipiscing elit. Sed eget
            risus velit.
          </p>
        </div>
        <img src={farm} alt="" className="w-full h-[400px] object-cover" />
      </div>
      <div className="flex flex-col justify-start items-start space-x-4 w-full py-3 px-4 mt-10 shadow-gray-400 shadow-md">
        <span className="flex items-center justify-center space-x-2 ml-3">
          <FaIndustry className="text-2xl md:text-3xl text-gray-600" />
          <p className="font-bold text-gray-800 text-2xl md:text-3xl">
            Production
          </p>
        </span>
      </div>
      <div className="flex flex-col justify-start items-start py-3 px-5 md:px-20 mt-4">
        <ol className="flex flex-col space-y-4">
          <li className="text-gray-600 font-semibold text-md border-2 border-gray-100 px-4 py-2 rounded-lg bg-gray-50 shadow-md">
            <span className="text-xl font-bold text-gray-800 mr-2">
              Washing Station
            </span>
            Under the name of our company and owner's name, we own 16 washing
            stations and 4 dry mills in the Bensa, Aroressa, and Chire districts
            of Sidama.
          </li>
          <li className="text-gray-600 font-semibold text-md border-2 border-gray-100 px-4 py-2 rounded-lg bg-gray-50 shadow-md">
            <span className="text-xl font-bold text-gray-800 mr-2">
              Export Facilities
            </span>
            We provide warehouse facilities both in Addis Ababa and Hawassa
            cities. Three warehouses with a total capacity of 4400 square meters
            are located in Hawassa and five in Addis Ababa with a capacity of
            5000 sq. m where our modern export coffee cleaning plant is
            situated.
          </li>
          <li className="text-gray-600 font-semibold text-md border-2 border-gray-100 px-4 py-2 rounded-lg bg-gray-50 shadow-md">
            <span className="text-xl font-bold text-gray-800 mr-2">
              Coffee Cleaning
            </span>
            Coffee Cleaning Plant We own a coffee cleaning and processing plant
            with pre-cleaner, de-stoner, huller, polisher, grader, and
            handpicking belt facilities with a 4ton/hr capacity. Our color
            sorter from SATAKE is of the latest camera technology to sort coffee
            beans with higher sensitivity to remove rejects with maximum
            efficiency. In order to meet the demand for bulk packing from our
            customers we use a pneumatic system to load containers in bulk.
          </li>
        </ol>
      </div>
    </MainLayout>
  );
};

export default Products;
