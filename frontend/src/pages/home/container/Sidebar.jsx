import React, { useState } from "react";
import categories from "../../../data/categories";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="flex">
      <aside
        id="default-sidebar"
        className="z-40 w-64 h-[500px] transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                    selectedCategory === category.id ? "font-bold" : ""
                  }`}
                >
                  <span className="ms-3">{category.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories
            .find((category) => category.id === selectedCategory)
            ?.cards.map((card, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg shadow-md dark:border-gray-700"
              >
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
