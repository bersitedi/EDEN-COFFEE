// SimilarCards.jsx

import React from "react";
import { Link } from "react-router-dom";

const SimilarCards = ({ similarCards }) => {
  return (
    <div className="w-full shadow-sm rounded-lg p-4">
      <h2 className="font-medium text-lg mb-4">Similar Cards</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {similarCards.map((card) => (
          <Link key={card.id} to={`/card/${card.id}`}>
            <div className="flex space-x-2 items-center">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-base font-medium">{card.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarCards;
